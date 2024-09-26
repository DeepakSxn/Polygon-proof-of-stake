const hre = require("hardhat");
const fxRootContractABI = require("../fxRootContractABI.json");
const tokenContractJSON = require("../artifacts/contracts/MetaToken.sol/MetaToken.json");

const tokenAddress = "0xce4F1edd3B9E841bebaC3E94878D6CDfCf521239";
const tokenABI = tokenContractJSON.abi;
const FxERC721RootTunnel = "0x9E688939Cb5d484e401933D850207D6750852053";
const walletAddress = "0x363C2295fBA1FEa09B1f6E1D9C5f4CDE2BB0cABf";

async function main() {

  const tokenContract = await hre.ethers.getContractAt(tokenABI, tokenAddress);
  const fxContract = await hre.ethers.getContractAt(fxRootContractABI, FxERC721RootTunnel);

  for (let i = 10; i <15; i++) {
    const approveTx = await tokenContract.approve(FxERC721RootTunnel, i);
    await approveTx.wait();
    console.log('Approval confirmed');

    const depositTx = await fxContract.deposit(tokenAddress, walletAddress, i, "0x6556");
    await depositTx.wait();
    console.log("Tokens deposited");
  }
}

  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });