// scripts/deploy.js

const { ethers } = require("hardhat");

async function main() {
    // Get the contract factory
    const MetaToken = await ethers.getContractFactory("MetaToken");

    // Deploy the contract
    console.log("Deploying MetaToken...");
    const metaToken = await MetaToken.deploy();
    
    // Wait for the deployment to complete
    
    console.log("MetaToken deployed to address:", metaToken.address);

    // Optional: You can store or log the address in a JSON file for future reference
    
}

// Execute the script
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
