import React, { createContext, useState, useEffect, useCallback, useMemo } from "react";
import axios from "axios";
import siteConfig from './../config';
import { create as ipfsHttpClient } from 'ipfs-http-client'
import {ArtTokenContract, CoinContract, MarketplaceContract} from './../contract'
import {ethers, BigNumber} from "ethers";

const ipfs = ipfsHttpClient('https://ipfs.infura.io:5001/api/v0')

const MarketplaceContext = createContext();

const MarketplaceContextProvider = ({ children }) => {
    // the value that will be given to the context
    const [myPhoto, setMyPhoto] = useState();
    const [messageMarketplace, setMessageMarketplace] = useState('');
    const [messageTypeMarketplace, setMessageTypeMarketplace] = useState('');
    const [isChanged, setIsChanged] = useState(false)
    const messageTypeMarketplaceAction = useCallback(async(val) => {
      setMessageTypeMarketplace(val)
    })

    const messageMarketplaceAction = useCallback(async(val) => {
      setMessageMarketplace(val)
    })

    const sendFileToIPFS = async (fileImg) => {

      if (fileImg) {
          try {
              const formData = new FormData();
              formData.append("file", fileImg);
              const resFile = await axios({
                  method: "post",
                  url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
                  data: formData,
                  headers: {
                      'pinata_api_key': `${siteConfig.REACT_APP_PINATA_API_KEY}`,
                      'pinata_secret_api_key': `${siteConfig.REACT_APP_PINATA_API_SECRET}`,
                      "Content-Type": "multipart/form-data"
                  },
              });


              const ImgHash = `ipfs://${resFile.data.IpfsHash}`;
              return resFile.data.IpfsHash

          } catch (error) {
              console.log("Error sending File to IPFS: ")
              console.log(error)
          }
      }
    }
    const contracts = async () =>{
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      var signer = provider.getSigner();
      var artTokenContract = ArtTokenContract.connect(signer);
      var coinContract = CoinContract.connect(signer);
      var marketplaceContract = MarketplaceContract.connect(signer);
      return {artTokenContract, coinContract, marketplaceContract }
    }

    const createNFTAction = useCallback(async(val, library) => {
      let url;
      let metadata;
      let tokenId;
      let smartcontractAddress = ArtTokenContract.address;
      try{
        setMessageTypeMarketplace("info");
        setMessageMarketplace("NFT Creating");

        if(myPhoto){
          const ipfs = await sendFileToIPFS(myPhoto);
          // const added = await ipfs.add(myPhoto)
          // url = `https://cloudflare-ipfs.com/ipfs/${added.path}`; //https://ipfs.infura.io  https://cloudflare-ipfs.com/ipfs/ 
          url = `https://cloudflare-ipfs.com/ipfs/${ipfs}`; //https://ipfs.infura.io  https://cloudflare-ipfs.com/ipfs/ 
          metadata = {"image":url, "name":val.name, "description":val.description, "propertySize":val.properties};
          const provider = new ethers.providers.Web3Provider(window.ethereum);
          var signer = provider.getSigner();
          var artTokenContract = ArtTokenContract.connect(signer);
          const tx = await artTokenContract.create(url.toString(), JSON.stringify(metadata));
          const tx_event = await tx.wait();
          tokenId = parseInt(tx_event.events[0].args.tokenId._hex, 16);
        }
        // else{ return;}
        let requestData = new FormData();
        requestData.append("avatar", myPhoto?myPhoto:"")
        requestData.append("wallet", val.wallet)
        requestData.append("name", val.name)
        requestData.append("externalLink", val.externalLink)
        requestData.append("description", val.description)
        requestData.append("collection", val.collection)
        requestData.append("license", val.license)
        requestData.append("properties", val.properties)
        requestData.append("levels", val.levels)
        requestData.append("stats", val.stats)
        requestData.append("category", val.category)
        requestData.append("unlockContent", val.unlockContent)
        requestData.append("sensitiveContent", val.sensitiveContent)
        requestData.append("supply", val.supply)
        requestData.append("chain", val.chain)
        requestData.append("royalty", val.royalty)
        requestData.append("freeze", val.freeze)
        requestData.append("file", url)
        requestData.append("smartcontractAddress", smartcontractAddress)
        requestData.append("tokenId", tokenId)
        // const added = await ipfs.add(myPhoto)
        // const url = `https://ipfs.infura.io/ipfs/${added.path}`
        // const file = await ipfs.add(urlSource('https://ipfs.io/images/ipfs-logo.svg'))
        // let newNft = {"image":ipfsHash, "name":name, "description":description, "price":price, "royalty":royalty, "propertySize":propertySize, "propertyM":propertyM };

        const result = await axios.post(`${siteConfig.apiUrl}/api/collectible/create-nft`, requestData);
        setMessageTypeMarketplace("success");
        setMessageMarketplace("NFT Create Successfully");
      }catch(err){
        // setMessageTypeMarketplace("warning");
        // setMessageMarketplace("Warning: NFT Create");
      }
    })

    const airdropTestTokenAction = useCallback(async(account) => {
      try{
        const {coinContract } = await contracts();
        let price = ethers.utils.parseUnits("0.01".toString())

        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const balance = await provider.getBalance(account);
        if(!BigNumber.from(balance).gte(BigNumber.from(price.toString()))) {
          setMessageTypeMarketplace("warning");
          setMessageMarketplace(`Insufficient Balance! your balance is ${balance/1000000000000000000}`);
          return;
        }
        setMessageTypeMarketplace("info");
        setMessageMarketplace("Airdroping 10,000 FUJI token");
        let amount = ethers.utils.parseUnits("10000".toString())
        const tx = await coinContract.mint(account, amount);
        if(tx==null) return;
        await tx.wait();
        setMessageTypeMarketplace("success");
        setMessageMarketplace("Airdrop Successfully");
      }catch(err){
        // console.log(err)
        // setMessageTypeMarketplace("error");
        // setMessageMarketplace("Error: Airdrop");
      }
    })

    const placeBuyAction = useCallback(async(data) => {
      try{
        const { coinContract, marketplaceContract } = await contracts();
        let assetId = data.assetId;
        let royalty = data.royalty;
        let price = ethers.utils.parseUnits(data.price.toString())
        const balance = (await coinContract.balanceOf(data.wallet)).toString();
        if(!BigNumber.from(balance).gte(BigNumber.from(price.toString()))) {
          setMessageTypeMarketplace("warning");
          setMessageMarketplace(`Insufficient Balance! your balance is ${balance/1000000000000000000}`);
          return;
        }

        const tx = await coinContract.approve(MarketplaceContract.address, price);
        if(tx==null) return;
        setMessageTypeMarketplace("success");
        setMessageMarketplace("Waiting ...");
        await tx.wait();
        await marketplaceContract.safeExecuteOrder(ArtTokenContract.address, assetId, price, royalty)
        const result = await axios.post(`${siteConfig.apiUrl}/api/collectible/buy`, data);
        setIsChanged(!isChanged)
        setMessageTypeMarketplace("success");
        setMessageMarketplace("Buy Successfully");
      }catch(err){
        // setMessageTypeMarketplace("warning");
        // setMessageMarketplace("Warning: NFT Buy");
      }
    })

    const makeOfferAction = useCallback(async(data) => {
      // try{
        const {artTokenContract, coinContract, marketplaceContract } = await contracts();
        let assetId = data.assetId
        let price = ethers.utils.parseUnits(data.price.toString());
        let auctionDate = Math.floor(new Date().getTime()/1000);

        const balance = (await coinContract.balanceOf(data.wallet)).toString();
        if(!BigNumber.from(balance).gte(BigNumber.from(price.toString()))) {
          setMessageTypeMarketplace("warning");
          setMessageMarketplace(`Insufficient Balance! your balance is ${balance/1000000000000000000}`);
          return;
        }
       
        const tx = await coinContract.approve(MarketplaceContract.address, price);
        if(tx==null) return;
        setMessageTypeMarketplace("success");
        setMessageMarketplace("Waiting ...");
        await tx.wait();
        await marketplaceContract.PlaceBid(ArtTokenContract.address, assetId, price, auctionDate);
        const result = await axios.post(`${siteConfig.apiUrl}/api/collectible/make-offer`, data);
        setIsChanged(!isChanged)
        setMessageTypeMarketplace("success");
        setMessageMarketplace("Make Offer Successfully");
      // }catch(err){
      //   setMessageTypeMarketplace("warning");
      //   setMessageMarketplace("Warning: Please try again");
      // }
    })

    const acceptOfferAction = useCallback(async(data) => {
      try{
        const {artTokenContract, coinContract, marketplaceContract } = await contracts();
        let assetId = data.assetId
        let price = ethers.utils.parseUnits(data.price.toString())
        const tx = await coinContract.approve(MarketplaceContract.address, assetId);
        if(tx==null) return;
        setMessageTypeMarketplace("success");
        setMessageMarketplace("Waiting ...");
        await tx.wait()
        await marketplaceContract.acceptBid(ArtTokenContract.address, assetId, price, data.royalty);
        const result = await axios.post(`${siteConfig.apiUrl}/api/collectible/accept-offer`, data);
        setIsChanged(!isChanged)
        setMessageTypeMarketplace("success");
        setMessageMarketplace("Accept Offer Successfully");
      }catch(err){
        // setMessageTypeMarketplace("warning");
        // setMessageMarketplace("Warning: Accept Offer");
      }
    })

    const cancelOfferAction = useCallback(async(data) => {
      try{
        const {artTokenContract, coinContract, marketplaceContract } = await contracts();
        let assetId = data.assetId
        await marketplaceContract.cancelBid(ArtTokenContract.address, assetId);
        const result = await axios.post(`${siteConfig.apiUrl}/api/collectible/cancel-offer`, data);
        setMessageTypeMarketplace("success");
        setMessageMarketplace("Cancel Offer Successfully");
      }catch(err){
        // setMessageTypeMarketplace("warning");
        // setMessageMarketplace("Warning: Cancel Offer");
      }
    })

    const changeToSellItemAction = useCallback(async(data) => {
      try{
        const {artTokenContract, coinContract, marketplaceContract } = await contracts();
        let assetId = data.assetId;
        let price = ethers.utils.parseUnits(data.price.toString());
        let auctionDate = Math.floor(new Date(data.date).getTime()/1000);
        if (!data.isCreated) {
          const tx = await artTokenContract.approve(MarketplaceContract.address, assetId);
          setMessageTypeMarketplace("success");
          setMessageMarketplace("Waiting ...");
          await tx.wait()
          await marketplaceContract.createOrder(ArtTokenContract.address, assetId, price, auctionDate);
        } else {
          await marketplaceContract.updateOrder(ArtTokenContract.address, assetId, price, auctionDate);
        }
        const result = await axios.post(`${siteConfig.apiUrl}/api/collectible/change-to-sell`, data);
        setIsChanged(!isChanged)
        setMessageTypeMarketplace("success");
        setMessageMarketplace("Sell Offer Successfully");
      }catch(err){
        // setMessageTypeMarketplace("warning");
        // setMessageMarketplace("Warning: Change To Sell Item");
      }
    })

    const changeToCancelSellItemAction = useCallback(async(data) => {
      try{
        const {artTokenContract, coinContract, marketplaceContract } = await contracts();
        let assetId = data.assetId; //data.assetId;
        await marketplaceContract.cancelOrder(ArtTokenContract.address, assetId);
        const result = await axios.post(`${siteConfig.apiUrl}/api/collectible/change-to-cancelsell`, data);
        setIsChanged(!isChanged)
        setMessageTypeMarketplace("success");
        setMessageMarketplace("Sell Offer Canceling Successfully");
      }catch(err){
        // setMessageTypeMarketplace("warning");
        // setMessageMarketplace("Warning: Cancel To Sell Item");
      }
    })

    const changePhotoAction = useCallback(async(val) => {
      setMyPhoto(val);
    })
    
    const contextValue = useMemo(() => ({
      createNFTAction,
      changePhotoAction,
      placeBuyAction,
      makeOfferAction,
      changeToSellItemAction,
      acceptOfferAction,
      changeToCancelSellItemAction,
      cancelOfferAction,
      isChanged,
      messageMarketplace,
      messageTypeMarketplace,
      messageMarketplaceAction,
      messageTypeMarketplaceAction,
      airdropTestTokenAction
    }), [
      isChanged,
      createNFTAction,
      changePhotoAction,
      placeBuyAction,
      makeOfferAction,
      changeToSellItemAction,
      acceptOfferAction,
      changeToCancelSellItemAction,
      cancelOfferAction,
      messageMarketplace,
      messageTypeMarketplace,
      messageMarketplaceAction,
      messageTypeMarketplaceAction,
      airdropTestTokenAction
    ])    

    return (
      // the Provider gives access to the context to its children
      <MarketplaceContext.Provider value={contextValue}>
          {children}
      </MarketplaceContext.Provider>
    );
};


export { MarketplaceContext, MarketplaceContextProvider };
