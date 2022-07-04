import Web3 from 'web3';

let web3;
if (typeof window !== 'undefined') {
    if (typeof (window as any).ethereum !== 'undefined' || typeof (window as any).web3 !== 'undefined') {
        web3 = new Web3((window as any).ethereum || (window as any).web3.currentProvider);
    } else {
        web3 = new Web3();
    }
}
else {
    const provider = new Web3.providers.HttpProvider("https://mainnet.infura.io/v3/92c46476512549d3a34dbff7360c37de");
    web3 = new Web3(provider);
}
export { web3 };