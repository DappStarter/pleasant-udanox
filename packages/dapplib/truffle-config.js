require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea glimpse flame traffic black deliver remind prosper gesture inflict task giggle'; 
let testAccounts = [
"0x10b274ef24e973eac5bce0390b0a07d727bda737e818981680ea90e866e71502",
"0x172b83b4b31e301f074a51bc0bc81164cd8ffacae32e99c250ead11095070a00",
"0xa3618915bb039a2d647863bafaf0942cf7f744ade64dffc7f225f77f0d0578f4",
"0x04dc950dace672a70edeb8f8820027e7aea2262728cb614a8fe823ce204c13e7",
"0x7ff124d5a2cdf82fcd1626b0a62075e52d965c97d732de2e5a9a55f01d462859",
"0x2cf45660ea7dabfe2aec200c4854967ce8a8206f5e1a1e4f1720c930b4664eec",
"0xc93f2a7a942680fcd1a530556d46581669afb96cd3ed09a62d44c4f7021ef269",
"0x333a07b5e97f800c0deb17af2dcc1088e5e6b4d4f86c003ba7a6dcb91bf78e25",
"0xc1e63dcb62aa06349d63e549ee7a85edbb09e4f506f981254044443eb6b0771a",
"0x0e535ed56efe660ada7bc74d6c97e01ac9bd57d37dced4bdaa556d6646165216"
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
