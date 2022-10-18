import React, { createContext, useState, useEffect, useCallback, useMemo } from "react";
import { Web3ReactProvider } from '@web3-react/core'
import { Web3Provider } from "@ethersproject/providers";
import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { WalletLinkConnector } from "@web3-react/walletlink-connector";
import { toHex } from "./../utils/getHex";
import siteConfig from './../config';

const WalletContext = createContext();
const avaxChainId = siteConfig.avaxChainId;

const getLibrary = (provider) => {
  return new Web3Provider(window.ethereum);
}

const networkParams = {
  "0xa869": {
    chainId: "0xa869",
    rpcUrls: ["https://api.avax-test.network/ext/bc/C/rpc"],
    chainName: "Avalanche Fuji Testnet",
    nativeCurrency: { name: "AVAX", decimals: 18, symbol: "AVAX" },
    blockExplorerUrls: ["https://testnet.snowtrace.io"],
    iconUrls: ["https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj6_dOJQIA-8YET1IguW8U8ZWA82vFGPwb-CGdVRPhkLEjOOGTbzU9m4dXZf_ZCBCFijYay7VdwIdut0V0qrZVM4sOjY-_TFHpulLFNF-EGmOCYn7tMoyuftbrC2PgFTEc8CVzAE0dC2TZF5bgdl0O8clM2qnAsCpjDsyWRJS4Ki4SXjTefcIAzd5R4/s0-rw/PNG.VECTOR69.COM-Avalanche-AVAX-Logo-Icon.png"]
  }
};

const injected = new InjectedConnector({
  supportedChainIds: [1, 43113, 43114]
});

const walletconnect = new WalletConnectConnector({
  rpcUrl: `https://avalanche-fuji.infura.io/v3/e0ee07907fbb43608c8f0e1cc1f2eed2`,
  bridge: "https://bridge.walletconnect.org",
  qrcode: true
});

const walletlink = new WalletLinkConnector({
  url: `https://avalanche-fuji.infura.io/v3/e0ee07907fbb43608c8f0e1cc1f2eed2`,
  appName: "web3-react-demo"
});

const WalletContextProvider = ({ children }) => {
    // the value that will be given to the context
    const [inventoryItem, setInventoryItem] = useState();
    const [inventoryItemName, setInventoryItemName] = useState([]);
    
    const switchNetwork = async (library) => {
      try {
          await library.provider.request({
              method: "wallet_switchEthereumChain",
              params: [{ chainId: toHex(avaxChainId) }]
          });
      } catch (switchError) {
        if (switchError.code === 4902) {
          try {
            console.log("add chain")
            console.log(toHex(avaxChainId))

            console.log(networkParams[toHex(avaxChainId)])
              await library.provider.request({
                  method: "wallet_addEthereumChain",
                  params: [networkParams[toHex(avaxChainId)]]
              });
          } catch (error) {
              console.log(error);
          }
        }else{
          try{
            await window.ethereum.request({
              method: 'wallet_switchEthereumChain',
              params: [{ chainId: toHex(avaxChainId) }],
            })
          }catch(switchError){
            try{
              await  window.ethereum.request({
                method: "wallet_addEthereumChain",
                params: [networkParams[toHex(avaxChainId)]]
              });
            }catch(err){
              console.log(err)
            }
          }
        }
      }
    };

    const contextValue = useMemo(() => ({
        switchNetwork
    }), [switchNetwork])    

    return (
      // the Provider gives access to the context to its children
      <WalletContext.Provider value={contextValue}>
         <Web3ReactProvider getLibrary={getLibrary}>
            {children}
         </Web3ReactProvider>
      </WalletContext.Provider>
    );
};

export const connectors = {
  injected: injected,
  walletConnect: walletconnect,
  coinbaseWallet: walletlink
};

export { WalletContext, WalletContextProvider };
