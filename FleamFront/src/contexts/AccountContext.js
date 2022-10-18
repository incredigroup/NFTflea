import React, { createContext, useState, useEffect, useCallback, useMemo } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import siteConfig from './../config';
import {ArtTokenContract, CoinContract, MarketplaceContract} from './../contract'

const AccountContext = createContext();

const AccountContextProvider = ({ children }) => {
    // the value that will be given to the context
    const [myWalletInfo, setMyWalletInfo] = useState();
    const [myPartnerInfo, setMyPartnerInfo] = useState();
    const [myPhotoUser, setMyPhotoUser] = useState();
    const [myPhotoForLead, setMyPhotoForLead] = useState();
    const [profileInfo, setProfileInfo] = useState({});
    const [popularCreators, setPopularCreators] = useState([]);
    const [profileCollectionData, setProfileCollectionData] = useState([]);
    const [profileFollowData, setProfileFollowData] = useState([]);
    const [productsCountData, setproductsCountData] = useState([]);
    const [leaderBoardData, setLeaderBoardData] = useState([]);
    const [productDetailsData, setProductDetailsData] = useState();
    const [message, setMessage] = useState('');
    const [messageType, setMessageType] = useState('');
    const [brandPartnerData, setBrandPartnerData] = useState([])
    const [mostLikedData, setMostLikedData] = useState([])
    const messageTypeAction = useCallback(async(val) => {
      setMessageType(val)
    });

    const alertWalletConnectAction = useCallback(async(val) => {
        setMessageType("info");
        setMessage("Please Connect Wallet!");
    })

    const walletConnectAction = useCallback(async (val) => {
      try{
        const data = { wallet: val }
        const result = await axios.post(`${siteConfig.apiUrl}/api/users/wallet-connect`, data)
        const res = await axios.post(`${siteConfig.apiUrl}/api/users/get-brand`, data)
        setMyPartnerInfo(res.data)
        // setMessageType("success");
        // setMessage("Wallet Connect Successfully");
        const decoded = jwt_decode(result.data.token);
        localStorage.setItem('token', result.data.token)
        setMyWalletInfo(decoded.user);
      }catch(err){
        // setMessageType("error");
        // setMessage("Error: Wallet Connect");
      }
    })

    const getUserDataAction = useCallback(async (val) => {
      try{
        const data = { wallet: val }
        const result = await axios.post(`${siteConfig.apiUrl}/api/users/wallet-connect`, data)
        const decoded = jwt_decode(result.data.token);
        setMyWalletInfo(decoded.user);
      }catch(err){
        // setMessageType("error");
        // setMessage("Error: Wallet Connect");
      }
    })

    const requestBrandPartnerAction = useCallback(async (val) => {
      try{
        const data = { wallet: val, status: "waiting" }
        const result = await axios.post(`${siteConfig.apiUrl}/api/users/request-brandpartner`, data)
        setProfileInfo(result.data)
        setMessageType("success");
        setMessage("Requested Successfully");
      }catch(err){
        setMessageType("error");
        setMessage("Error: Request Brand Partner");
      }
    })

    const getProductsCountDataAction = useCallback(async (val) => {
      try{
        const result = await axios.post(`${siteConfig.apiUrl}/api/collectible/get-collectible-products-count`);
        setproductsCountData(result.data)
      }catch(err){}
    })

    const editProfileAction = useCallback(async (val) => {
      try{
        const requestData = new FormData();
        requestData.append("avatar", myPhotoUser?myPhotoUser:"")
        requestData.append("wallet", val.wallet)
        requestData.append("name", val.name)
        requestData.append("email", val.email)
        requestData.append("bio", val.bio)
        requestData.append("site", val.site)
        requestData.append("facebook", val.facebook)
        requestData.append("twitter", val.twitter)
        requestData.append("instagram", val.instagram)
        requestData.append("linkedin", val.linkedin)
        requestData.append("discord", val.discord)
        const result = await axios.post(`${siteConfig.apiUrl}/api/users/edit-profile`, requestData);
        setMessageType("success");
        setMessage("Profile Updated Successfully");
        return "success"
      }catch(err){
        setMessageType("error");
        setMessage("Error: Edit Profile");
      }
    })

    const createLeadAction = useCallback(async(val) => {
      try{
        const requestData = new FormData();
        requestData.append("avatar", myPhotoForLead?myPhotoForLead:"")
        requestData.append("wallet", val.wallet)
        requestData.append("owner", val.owner?val.owner:"")
        requestData.append("name", val.name?val.name:"")
        requestData.append("title", val.title?val.title:"")
        requestData.append("email", val.email?val.email:"")
        requestData.append("phone", val.phone?val.phone:"")
        requestData.append("fax", val.fax?val.fax:"")
        requestData.append("mobile", val.mobile?val.mobile:"")
        requestData.append("site", val.site?val.site:"")
        requestData.append("source", val.source?val.source:"")
        requestData.append("status", val.status?val.status:"")
        requestData.append("industry", val.industry?val.industry:"")
        requestData.append("employes", val.employes?val.employes:"")
        requestData.append("revenue", val.revenue?val.revenue:"")
        requestData.append("rating", val.rating?val.rating:"")
        requestData.append("skype", val.skype?val.skype:"")
        requestData.append("secEmail", val.secEmail?val.secEmail:"")
        requestData.append("twitter", val.twitter?val.twitter:"")
        requestData.append("emailOpt", val.emailOpt?val.emailOpt:"")
        requestData.append("street", val.street?val.street:"")
        requestData.append("city", val.city?val.city:"")
        requestData.append("state", val.state?val.state:"")
        requestData.append("zipcode", val.zipcode?val.zipcode:"")
        requestData.append("country", val.country?val.country:"")
        const result = await axios.post(`${siteConfig.apiUrl}/api/users/create-lead`, requestData);
        setMessageType("success");
        setMessage("Partner Form Sent Successfully");
      }catch(err){
        setMessageType("error");
        setMessage("Error: Partnership Form Sending");
      }
    })

    const getProfileAction = useCallback(async(val) => {
      try{
        const data = { wallet: val, token: localStorage.getItem('token') }
        const result = await axios.post(`${siteConfig.apiUrl}/api/users/get-profile`, data);
        setProfileInfo(result.data)
      }catch(err){}
    })

    const getProductDetailsAction = useCallback(async(id, wallet) => {
      try{
        const data = { id: id, wallet: wallet}
        const result = await axios.post(`${siteConfig.apiUrl}/api/users/get-product-details`, data);
        setProductDetailsData(result.data)
      }catch(err){}
    })

    const getLeaderBoardDataAction = useCallback(async() => {
      try{
        const data = { }
        const result = await axios.post(`${siteConfig.apiUrl}/api/users/get-leaderboard-data`, data);
        setLeaderBoardData(result.data)
      }catch(err){}
    })

    const getMostLikedDataAction = useCallback(async() => {
      try{
        const result = await axios.post(`${siteConfig.apiUrl}/api/users/get-most-liked-data`);
        setMostLikedData(result.data)
      }catch(err){}
    })

    const getBrandPartnerDataAction = useCallback(async() => {
      try{
        const data = { }
        const result = await axios.post(`${siteConfig.apiUrl}/api/users/get-all-brandpartner`, data);
        setBrandPartnerData(result.data)
      }catch(err){}
    })

    const getCollectionProfileAction = useCallback(async(val, collection, count) => {
      try{
        const data = { wallet: val, collection: collection, count: count ? count : 30 }
        const result = await axios.post(`${siteConfig.apiUrl}/api/users/get-collection-profile`, data)
        setProfileCollectionData(result.data)
      }catch(err){}
    })

    const getProfilesFollowAction = useCallback(async(val, collection) => {
      try{
        const data = { wallet: val,  collection: collection }
        const result = await axios.post(`${siteConfig.apiUrl}/api/users/get-profiles-follow`, data)
        setProfileFollowData(result.data)
      }catch(err){}
    })

    const profileLikeAction = useCallback(async(wallet, id) => {
      try{
        const data = { wallet: wallet, id: id }
        const result = await axios.post(`${siteConfig.apiUrl}/api/users/profile-like`, data);
        setMessageType("info");
        setMessage("Profile Like Changed Successfully");
        setProfileInfo(result.data)
      }catch(err){
        setMessageType("error");
        setMessage("Error: Profile Like");
      }
    })

    const profileFollowAction = useCallback(async(wallet, followWallet) => {
      try{
        if(wallet==followWallet) return;
        const data = { wallet: wallet, followWallet: followWallet }
        const result = await axios.post(`${siteConfig.apiUrl}/api/users/profile-follow`, data);
        setMessageType("info");
        setMessage("Profile Follow Changed Successfully");
        setProfileInfo(result.data)
      }catch(err){
        setMessageType("error");
        setMessage("Error: Profile Follow");
      }
    })

    const checkPrivateProfileAction = useCallback(async(val) => {
      try{
        const data = { wallet: val }
        const result = await axios.post(`${siteConfig.apiUrl}/api/users/profile-private`, data);
        setMessageType("info");
        setMessage("Profile Private Changed Successfully");
        setProfileInfo(result.data)
      }catch(err){
        setMessageType("error");
        setMessage("Error: Profile Private");
      }
    })

    const getPopularCreatorAction = useCallback(async() => {
      try{
        const result = await axios.post(`${siteConfig.apiUrl}/api/users/get-topcreators`);
        setPopularCreators(result.data)
      }catch(err){
        console.log(err)
      }
    })

    const changePhotoUserAction = useCallback(async(val) => {
      setMyPhotoUser(val);
    }, [setMyPhotoUser])

    const changePhotoForLeadAction = useCallback(async(val) => {
      setMyPhotoForLead(val);
    })
    
    const contextValue = useMemo(() => ({
      walletConnectAction,
      getUserDataAction,
      editProfileAction,
      myWalletInfo,
      changePhotoUserAction,
      createLeadAction,
      changePhotoForLeadAction,
      getProfileAction,
      profileInfo,
      siteConfig,
      checkPrivateProfileAction,
      profileLikeAction,
      profileFollowAction,
      getPopularCreatorAction,
      popularCreators,
      profileCollectionData,
      profileFollowData,
      getCollectionProfileAction,
      getProfilesFollowAction,
      leaderBoardData,
      getLeaderBoardDataAction,
      brandPartnerData,
      getBrandPartnerDataAction,
      productDetailsData,
      getProductsCountDataAction,
      productsCountData,
      getProductDetailsAction,
      messageTypeAction,
      message,
      messageType,
      alertWalletConnectAction,
      requestBrandPartnerAction,
      myPartnerInfo,
      getMostLikedDataAction,
      mostLikedData,
    }), [walletConnectAction, getUserDataAction, editProfileAction, myWalletInfo, changePhotoUserAction, createLeadAction, changePhotoForLeadAction, getProfileAction, profileInfo, siteConfig,
        checkPrivateProfileAction, profileLikeAction, profileFollowAction, getPopularCreatorAction, popularCreators, profileFollowData, profileCollectionData,
        getProfilesFollowAction, getCollectionProfileAction, leaderBoardData, getLeaderBoardDataAction, brandPartnerData, getBrandPartnerDataAction,
        productDetailsData, getProductDetailsAction, productsCountData, getProductsCountDataAction,
        getMostLikedDataAction, mostLikedData,
        messageTypeAction,
        message,
        messageType,
        alertWalletConnectAction,
        requestBrandPartnerAction,
        myPartnerInfo
       ])

    return (
      // the Provider gives access to the context to its children
      <AccountContext.Provider value={contextValue}>
          {children}
      </AccountContext.Provider>
    );
};


export { AccountContext, AccountContextProvider };
