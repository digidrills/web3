// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// importing the openzepplin library for the ERC721 standard
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";


contract Example_ERC721 is ERC721URIStorage {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    // Using the constructor we define the contract name - Property and contract Symbol - PRT
    constructor() ERC721("Property", "PRT") {}

    // This function implements the creation of a new NFT and then sending it to an address
    function mint_and_transfer(address user_address, string memory tokenURI)
        public
        returns (uint256)
    {
        uint256 newItemId = _tokenIds.current();
        _mint(user_address, newItemId);
        _setTokenURI(newItemId, tokenURI);

        _tokenIds.increment();
        return newItemId;
    }
}