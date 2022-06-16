//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8;

contract AssetLedger
{
    address public minter;
    address public escrow=0x6BDEBB81d81dd1fe6613e833B682e8daA4911147; //Wallet address of escrow

    struct Asset //Structure of the property asset
    {
        string assetid;
        string o_name;
        string price;
        string doc_link;
        string latitude;
        string longitude;
    }
    mapping (address => Asset[]) internal balances; // balance in the wallet
    function getResult(address x) public view returns(string memory assetids){ //returns a list of asset ID's owned by the user
       for (uint8 i = 0; i < balances[x].length; i++) {
           assetids=string(abi.encodePacked(assetids, balances[x][i].assetid));
           assetids=string(abi.encodePacked(assetids, " "));
        }
   }
constructor() {
        minter = msg.sender;
    }
    event Sent(address from, address to, Asset e);
    //Registering the property asset on the platform
    function mint(address receiver, string memory assetid, string memory o_name,
        string memory price,
        string memory doc_link,
        string memory latitude,
        string memory longitude) public 
    {
            require(msg.sender == minter);
            Asset memory e
            =Asset(assetid,
                    o_name,
                    price,
                    doc_link,
                    latitude,
                    longitude);
            balances[receiver].push(e);
    }
    //Transfer of asset
    function send(address receiver, address sender, string memory assetid) public {
        require(msg.sender == minter);
        Asset memory f;
        uint8 j;
        for (uint8 i = 0; i < balances[sender].length; i++) {
            if(keccak256(abi.encodePacked(balances[sender][i].assetid)) == keccak256(abi.encodePacked(assetid)))
                {
                    f = balances[sender][i];
                    balances[receiver].push(f);
                    j=i;
                    break;
                }
        }
        for (uint8 k = j; k < balances[sender].length-1; k++) {
            balances[sender][k]=balances[sender][k+1];
        }
        delete balances[sender][balances[sender].length - 1];
    }
    //Transfer of asset to escrow from seller
    function sellertoescrow(address sender,string memory assetid)public {
            send(escrow,sender,assetid);
    }
    //Transfer of asset to buyer from escrow
    function escrowtobuyer(address reciever,string memory assetid)public {
            send(reciever,escrow,assetid);
    }
}
