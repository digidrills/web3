### ERC standards

<li>Stands for Ethereum Request for Comments’(ERC).</li>
<li>It is a document that smart contract programmers using the Ethereum blockchain platform write. </li>
<li>It describes rules that Ethereum-based tokens must comply with.</li>

#### How are ERC’s created?

<li>The Ethereum community uses a process called the ‘Ethereum Improvement Proposal’ (EIP) to review these documents.</li>
<li>They comment on it and as a result of that, the developer that created the document may revise it.</li>
<li>The Ethereum community accepts some of these documents after working through the EIP process, finalises it, and then developers implement it. 
<li>This is how the document becomes an ERC. </li>

#### ERC 20 Standard

<li>The ERC-20 introduces a standard for Fungible Tokens</li>
<li>They have a property that makes each Token be exactly the same (in type and value) as another Token.</li>
<li>These tokens act as a medium of currency exchange.</li>

##### Use cases:

<li>To organise crowdfunding campaigns.</li>
<li>Issue Initial Coin Offering(ICOs).</li>
<li>Launch more cryptocurrencies in the market.</li>

Example: Bitcoin

https://ethereum.org/en/developers/docs/standards/tokens/erc-20/

Implementation via openzeppelin: https://docs.openzeppelin.com/contracts/4.x/erc20

#### ERC721  Standard

<li>It is a Standard for representing ownership of Non Fungible Tokens (NFTs).
<li>An NFT is used to identify something uniquely and hence are different from the standard tokens available like Ethereum,Polygon etc . It can be used to represent digital artworks, certificates, Real-estates and many more.
<li>Each NFT has a field called tokenUri where one can store metadata related to the NFT and this metadata is stored on-chain.

##### Use cases:

<li>Used as NFTs in the gaming industry.</li>
<li>NFT marketplaces.</li>
<li>Metaverse platforms.</li>

Example: CryptoKitties (A Dapp that creates unique digital kitties) use ERC721

https://ethereum.org/en/developers/docs/standards/tokens/erc-721/

Implementation via openzeppelin: https://docs.openzeppelin.com/contracts/4.x/erc721 

Drawbacks of ERC20 and ERC721: It requires a separate contract to be deployed for each token type or collection.

#### ERC 1155 – Multi-Token Standard

<li>It is an ERC standard for contracts that can manage multiple token types.</li>
<li>A single contract may include any combination of fungible as well as non-fungible tokens.</li>
<li>This is possible since each function in this type of contract contains _id argument which indicates the specific token type to be used in the transaction. </li>

##### Use cases:

<li>Used in online gaming.</li>
<li>Games now have fungible elements like life/energy, NFTs like gaming characters, and fungible native currencies to exchange values.</li>

https://ethereum.org/en/developers/docs/standards/tokens/erc-1155/

Implementation via openzeppelin: https://docs.openzeppelin.com/contracts/4.x/erc1155


#### ERC 223 – Solves the ‘Token Loss’ Issues of the ERC20
<li>If you send ERC 20 tokens to smart contracts that can’t handle tokens, this action burns the tokens, and we can’t recover them. 
<li>ERC 223 proposes to prevent this.
<li>Developers can either accept or decline tokens arriving at their smart contract addresses. 
<li>It specifies functions that a contract can code so that if it can’t accept tokens, the transfer will fail.
<li>While ERC 223 intends to save wealth lost accidentally, it’s not yet implemented. No tokens use it.



#### ERC20 vs ERC721 vs ERC1155

|Parameters | ERC-20 | ERC-721 | ERC-1155|
  | :---              |    :----:   |          :---: |         :---: |
|Ease of use|Allows single operation for each transaction|Allows single operation for each transaction|Allows multiple operation in a single transaction|
|Supported tokens|Fungible tokens|Non-fungible tokens|Fungible and non-fungible tokens|
|KYC verification|No KYC verification required|In-built KYC/AML|In-built KYC/AML|
|Smart contracts|Requires one common smart contract|Requires a unique smart contracts for each tokens|Requires a single smart contract for infinite tokens|
|Efficiency|Requires more storage|May require more storage space|Requires less storage space|
|Token transfer|Can transfer 1 or 2 token at once|Supports single token transfer at once|Supports batch transfer of many tokens|
|Transfer type|Transfer of value between the users|Transfer of rights|Transfer of value or the rights|
|Example use cases|Bianance Coin, Maker, OmiseGo|Decentraland, Crypto Kitties, Ethermon|Redeemable shopping vouchers|


