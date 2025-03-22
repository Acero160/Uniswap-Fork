const Router = artifacts.require("UniswapV2Router02.sol");
const WETH = artifacts.require("WETH.sol");

module.exports = async function (deployer, network, addresses) {
    const FACTORY_ADDR = "0xC99e657a585A463E203a36D6E5dF86B9c5C160E2";
    let wETH, WETH_addr;

    if (network === "mainnet"){
        wETH = await WETH.at('0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2');
        WETH_addr = '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2'; 
    } else {
        await deployer.deploy(WETH);
        wETH = await WETH.deployed();
        WETH_addr = wETH.address;
    }

   await deployer.deploy(Router, FACTORY_ADDR, WETH_addr);
};
