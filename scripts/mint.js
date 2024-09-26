async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  const MyNFT = await ethers.getContractFactory("MetaToken");

  const myNFT = await MyNFT.attach("0xce4F1edd3B9E841bebaC3E94878D6CDfCf521239"); 


  const tokenURIs = [
    "ipfs://QmSVK8d4Bqcd4kgKpSRNxL5Nh7qnw2PRKZBJGdsZXtELHg",
    "ipfs://QmfDQF9QcV1avjqK1kQ3ZjZ8CHuuwL4Zt9hYcZUVkmJus1",
    "ipfs://QmWD6iBJmsjPMgreekkrx7ZWkMGpzHsTR29nkhEV2D8jMB",
    "ipfs://QmbWbBh6bPwjNpdVJNLSaxKUBPjVFs5v3vz6YGceB4hdTX",
    "ipfs://QmYBw9YF7oxPdy5QUwUfchgsGSC1bvPcGfso1RPzDpRx5o",
  ];

  const prompts = [
      "student",
      "solo leveling",
      "Peace",
      "war time",
      "demons and gods",
  ];

  const tx = await myNFT.createNFTs(tokenURIs, prompts);
  console.log("Transaction sent:", tx.hash);

  await tx.wait();
  console.log("Batch minting completed");
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
