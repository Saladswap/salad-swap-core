pragma solidity =0.5.16;

import '../SaladERC20.sol';

contract ERC20 is SaladERC20 {
    constructor(uint _totalSupply) public {
        _mint(msg.sender, _totalSupply);
    }
}
