const hre = require("hardhat");
const tokenContractJSON = require("../artifacts/contracts/MetaToken.sol/MetaToken.json");

const tokenAddress = "0xFCD0A1EEeA86aBF8e6A2da7f04E386308fF0c38D"; 
const tokenABI = tokenContractJSON.abi;
const walletAddress = "0x363c2295fba1fea09b1f6e1d9c5f4cde2bb0cabf";

async function main() {
  try {
    const token = await hre.ethers.getContractAt(tokenABI, tokenAddress);
    const balance = await token.balanceOf(walletAddress);
    console.log(`You now have: ${balance} NFTs in your wallet`);
  } catch (error) {
    console.error(error);
    process.exitCode = 1;
  }
}

main();
