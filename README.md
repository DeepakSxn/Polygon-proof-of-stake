# NFT Transfer 

## Introduction
This project involves the successful minting of an NFT collection on the Ethereum Sepolia testnet. The NFTs are stored using Pinata for cloud storage, and can be viewed on OpenSea. The smart contracts were deployed using Hardhat.

## Features
- **Smart Contract Deployment**: Utilized Hardhat for deploying the smart contract.
- **Batch Minting**: Efficiently minted multiple NFTs using ERC721A.
- **Cloud Storage**: NFT metadata and assets securely stored with Pinata.
- **View on OpenSea**: The NFTs can be viewed on OpenSea for easy showcasing.

## Technologies Used
- Pinata
- Hardhat
- ERC721A
- Ethereum Sepolia Testnet
- OpenSea

## Project Workflow

1. **Smart Contract Development**:
   - Developed an ERC721A-based smart contract for batch minting of NFTs.
   - Implemented functionalities to store metadata and prompts for each NFT.

2. **Deploying the Contract**:
   - Used Hardhat for compiling and deploying the smart contract to the Ethereum Sepolia testnet.
   - Configured network settings and private keys in `hardhat.config.js` to deploy the contract.

3. **Minting NFTs**:
   - Created a script to batch mint NFTs by calling the smart contract’s minting function.
   - Uploaded metadata to Pinata, ensuring secure and accessible storage for the NFT data.

4. **Viewing NFTs on OpenSea**:
   - After minting, the NFTs are available to be viewed on OpenSea’s testnet platform.
   - Provided links and details to easily access and showcase the NFT collection on OpenSea.

## Getting Started

### Prerequisites
- Node.js and npm
- Hardhat
- MetaMask or any Ethereum wallet

### Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/Polygon-Proof-of-Stake.git
   cd Polygon-Proof-of-Stake 
   ```
2. **Install Dependencies:**
   ```bash
   npm i 
   ```
3. **Configure Hardhat:**
 - Update the hardhat.config.js file with your Sepolia and Polygon Amoy testnet settings, including RPC URLs and private keys.

### Deploying the Contract

1. **Compile the Contract:**
```bash
npx hardhat compile
```

2. **Deploy the Contract:**

```bash
npx hardhat run scripts/deploy.js --network sepolia
```

### Minting NFTs

1. **Run the Mint script: **
```bash
npx hardhat run scripts/Mint.js --network sepolia
```

### Contact
For any questions or inquiries,(deepaksaxena192837@gmail.com)
