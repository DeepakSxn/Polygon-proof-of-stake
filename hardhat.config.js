require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks: {
    amoy: {
      url: "https://rpc-amoy.polygon.technology/",
      chainId: 80002,
      accounts: ["8d1536958cc1472192ff0db150ee304010ef25105ce7655e37008873e76c791c"]
    },
    sepolia: {
      url: "https://sepolia.infura.io/v3/25763837ea2f4c1b9f950c093bc53f1e",
      chainId: 11155111,
      accounts: ["8d1536958cc1472192ff0db150ee304010ef25105ce7655e37008873e76c791c"]
    }
  },
};
