import Web3 from 'web3';

var web3 = null;
if (typeof(window) !== 'undefined' || window != null) {
    web3 = new Web3(window.web3.currentProvider);
}
export default web3;