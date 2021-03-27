require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom glide fresh tragic name return random unit install photo equal gaze'; 
let testAccounts = [
"0x556d149dfd444dc1722fb74081056ae9ead990009c9ba52fef99d0f742dc8015",
"0x6d870d3fde12f2271c56efc6020c483b37fc3bfca8f706355fcbf2e8a2e8038c",
"0xd01572504811cc6b468ba36d907e8f7c1045fd5bdadb6d9d5a3854b1b017b074",
"0x7f35ea587be355a4f03523ff3ad1a952cfa2319fb5025c107da9074351f2cd9d",
"0xd44cc31a13b0c0efa021b79144dbddd3f9b120434bab16d210862043b4b72be1",
"0x8a30113e3c6b3bba136cba5d8bf02079c36990e68311bd0e709661762f6eddde",
"0xb2050c8e973c2beda60dd3d8022445f154454245a482bfa286033a06729b9730",
"0xedf4c23b81a429c4f363e4a37525c1373082ba2802371bc4088f4e60b186cc8e",
"0xc10cb2d405dc16f26eb38dbc5239561f1db9846aea81c98224b010c6bd9ddfc5",
"0x0b63ee2d077dbdeab7e366419160cf3ecac3b4d2f7f2dcd66a330531ff0ba1d2"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
