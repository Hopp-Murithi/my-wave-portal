// SPDX-License-Identifier: UNLICENCED

pragma solidity ^0.8.17;

import "hardhat/console.sol";

contract WavePortal {
uint256 totalWaves;

    constructor() {
        console.log('Yo yo..the voting function just ran');
    }
    function wave() public {
        totalWaves += 1;
        console.log("%s has voted!", msg.sender);
    }

    function getTotalWaves() public view returns (uint256) {
        console.log("We have %d total votes!", totalWaves);
        return totalWaves;
    }
}