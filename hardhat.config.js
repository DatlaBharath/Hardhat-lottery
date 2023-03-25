require("@nomicfoundation/hardhat-toolbox");
require("hardhat-deploy");
require("solidity-coverage");
require("hardhat-gas-reporter");
require("chai")
// require("hardhat-contrat-sizer");
require("dotenv").config();
/** @type import('hardhat/config').HardhatUserConfig */
const RCLURL = process.env.RCLURL;
const HHAPI = process.env.HHAPI;
const PRIVATEKEY = process.env.PRIVATEKEY;
module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    sepolia: {
      url: RCLURL,
      accounts: [PRIVATEKEY],
      chainId: 11155111,
      blockConfrimations: 6
    },
    localHost: {
      url: "http://127.0.0.1:8545/",
      chainId: 31337
    }
  },
  namedAccounts: {
    deployer: {
        default: 0, // here this will by default take the first account as deployer
        1: 0, // similarly on mainnet it will take the first account as deployer. Note though that depending on how hardhat network are configured, the account 0 on one network can be different than on another
    },
  },
  // gasReporter : {
  //   enabled : process.env.REPORT_GAS !== undefined,
  //   currency : "USD",
  // },
  etherscan:{
    apiKey: HHAPI
  },
  solidity: {
    compilers: [{version: "0.8.18"} ,{version: "0.6.6"}]
  },
};
