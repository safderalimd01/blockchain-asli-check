import Web3 from './web3';
import ApartmentDetails1 from "./contracts/ProductVerification.json"

var count = null
if(Web3.eth.givenProvider.networkVersion === undefined){
  count = Web3.givenProvider.networkVersion
}else{
  count = Web3.eth.givenProvider.networkVersion
}
const address = ApartmentDetails1.networks['1584702677310'].address;

const abi = ApartmentDetails1.abi;

export default new Web3.eth.Contract(abi,address);