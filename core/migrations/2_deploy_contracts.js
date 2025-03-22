const Factory = artifacts.require("UniswapV2Factory.sol");
const TokenA = artifacts.require("TokenA");
const TokenB = artifacts.require("TokenB.sol");




module.exports = async function (deployer, network ,addresses) {
    await deployer.deploy(Factory, addresses[0]);  // Send Transaction
    const factoryInstance = await Factory.deployed(); // Create a reference to the contract

    let tokenA_addr, tokenB_addr; //  Store the address of tokens to deploy it

    if (network === "mainnet"){
        tokenA_addr = "";
        tokenB_addr = "";
    } else {
        await deployer.deploy(TokenA);
        await deployer.deploy(TokenB);

        // Create the instances of the contracts
        const tokenA = await TokenA.deployed();
        const tokenB = await TokenB.deployed();

        tokenA_addr = tokenA.address;
        tokenB_addr = tokenB.address;
    }


    // Create the pair

    await factoryInstance.createPair(tokenA_addr, tokenB_addr);
};

//Uniswap  0xC99e657a585A463E203a36D6E5dF86B9c5C160E2
//Token A  0x167cb2E1D7408749CaeDD076aE43a727cEE4BdD4
//Token B  0xCcA85234c34627b2F463F4969bA3b372C7768234