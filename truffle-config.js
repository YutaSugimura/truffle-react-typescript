const path = require("path");
const HDWalletProvider = require("truffle-hdwallet-provider");


// input
const INFURAKEY = '';
const MNEMONIC = '';
const GAS = 3000000;
const GASPRICE = 5;
const SKIP_DRY_RUN = false;


module.exports = {
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    ropsten: {
      provider: function() {
        return new HDWalletProvider(MNEMONIC, "https://ropsten.infura.io/v3/" + INFURAKEY)
      },
      network_id: 3,
      gas: GAS,
      gasPrice: 1000000000 * GASPRICE,
      skipDryRun: SKIP_DRY_RUN
    },
    kovan: {
      provider: function() {
        return new HDWalletProvider(MNEMONIC, "https://kovan.infura.io/v3/" + INFURAKEY)
      },
      network_id: 42,
      gas: GAS,
      gasPrice: 1000000000 * GASPRICE,
      skipDryRun: SKIP_DRY_RUN
    },
    rinkeby: {
      provider: function() {
        return new HDWalletProvider(MNEMONIC, "https://rinkeby.infura.io/v3/" + INFURAKEY)
      },
      network_id: 4,
      gas: GAS,
      gasPrice: 1000000000 * GASPRICE,
      skipDryRun: SKIP_DRY_RUN
    },
    "live": {
      provider: function() {
        return new HDWalletProvider(MNEMONIC, "https://mainnet.infura.io/v3/" + INFURAKEY)
      },
      network_id: 1,
      gas: GAS,
      gasPrice: 1000000000 * GASPRICE
    },
    development: {
      host: '127.0.0.1',
      port: 7545,
      network_id: '*'
    }
  },
  compilers: {
    solc: {
      version: "0.5.1",    // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      // settings: {          // See the solidity docs for advice about optimization and evmVersion
      //  optimizer: {
      //    enabled: false,
      //    runs: 200
      //  },
      //  evmVersion: "byzantium"
      // }
    }
  }
};