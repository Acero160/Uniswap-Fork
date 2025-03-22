# Uniswap Fork – Decentralized Exchange on Ethereum

Welcome to my custom fork of [Uniswap](https://uniswap.org/), the leading decentralized exchange (DEX) protocol built on Ethereum. This project demonstrates a deep dive into the inner workings of automated market makers (AMMs), smart contract development, and DeFi infrastructure.

## 🌟 Project Highlights

-  **Deep Understanding of Uniswap V2 Architecture**  
  Full implementation and customization of core contracts including `UniswapV2Factory`, `UniswapV2Pair`, and `UniswapV2Router`.

-  **Smart Contract Customization**  
  Introduced changes to protocol logic and fees structure to explore alternate trading dynamics.

- **Deployed on Local & Test Networks**  
  Deployed contracts on local Hardhat network and Ethereum testnets for full testing lifecycle.

-  **Robust Testing Suite**  
  Comprehensive test coverage using **Hardhat** and **Chai**, including edge cases and gas optimizations.


---


## 🚀 Getting Started

- **Clone both core and periphery repositories:**

```bash
git clone https://github.com/yourusername/uniswap-core-fork.git
git clone https://github.com/yourusername/uniswap-periphery-fork.git
```
- **Install dependencies:**
```bash
cd uniswap-core-fork
npm install

cd ../uniswap-periphery-fork
npm install
```

- **Run Ganache locally (GUI or CLI), then:**

  -  Deploy Factory contract (core project):
    
      ```bash
      npx hardhat run scripts/deployFactory.js --network localhost
      ```
  - Deploy WETH contract and get address
 
  - Deploy Router contract (periphery project):

    ```bash
      npx hardhat run scripts/deployRouter.js --network localhost
      ```

  - Create Token Pairs and Provide Liquidity
 
  - Execute Swaps using WETH


 ---

 ## 📚 Learning Objectives

- **Understand how DEXs like Uniswap work at the contract level**

- **Learn the architecture behind core and periphery separation**

- **Gain experience deploying and interacting with DeFi components**

- **Explore swap mechanics and liquidity provisioning**
 
