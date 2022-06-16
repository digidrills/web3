// contracts/GameItems.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// importing the openzepplin library for the ERC721 standard
import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";


contract GameItems is ERC1155 {
    // 5 token are initialized with their id
    uint256 public constant GOLD = 0;
    uint256 public constant SILVER = 1;
    uint256 public constant THORS_HAMMER = 2;
    uint256 public constant SWORD = 3;
    uint256 public constant SHIELD = 4;

    // Here the constructor is used for minting the tokens
    constructor() ERC1155("https://game.example/api/item/{id}.json") {
        // Here THORS_HAMMER is NFT because only 1 token was minted and the rest are fungible tokens
        _mint(msg.sender, GOLD, 10**18, "");
        _mint(msg.sender, SILVER, 10**27, "");
        _mint(msg.sender, THORS_HAMMER, 1, ""); 
        _mint(msg.sender, SWORD, 10**9, "");
        _mint(msg.sender, SHIELD, 10**9, "");
    }
}