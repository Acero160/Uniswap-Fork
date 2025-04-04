pragma solidity 0.5.16;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20Detailed.sol";

contract TokenA is ERC20, ERC20Detailed {
    constructor() ERC20Detailed("Token A", "TKA", 18) public {
        _mint(msg.sender, 1000000 * (10 ** uint256(decimals()))); // Initial supply
    }
}
