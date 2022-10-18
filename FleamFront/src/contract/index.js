import {artTokenContract, marketplaceContract, coinContract} from './contracts';
import {ethers} from "ethers";

const devnet = `https://avalanche-fuji.infura.io/v3/e0ee07907fbb43608c8f0e1cc1f2eed2`;
const provider = new ethers.providers.JsonRpcProvider(devnet);
const ArtTokenContract = new ethers.Contract(artTokenContract.fuji, artTokenContract.abi, provider);
const MarketplaceContract = new ethers.Contract(marketplaceContract.fuji, marketplaceContract.abi, provider);
const CoinContract = new ethers.Contract(coinContract.fuji, coinContract.abi, provider);

export {ArtTokenContract, MarketplaceContract, CoinContract};