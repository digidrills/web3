# Ethereum Name Service (ENS) - https://docs.ens.domains/

<li>The Ethereum Name Service (ENS) is a distributed, open, naming system within the ethereum blockchain.
<li>The functionality of ENS is similar to that of DNS.
<li>DNS resolves domains to their respective server IPs whereas ENS resolves them to their respective wallet addresses.
<li>Nameservers in DNS equivalent to resolver(a smart contract) for ENS.
<li>Subdomains are allowed in both.
<li>ENS decentralized since entries are stored on smart contracts on the blockchain whereas DNS is centralized. 
<li>Whenever a domain is purchased on ENS , an NFT is created and sent to the buyer as the proof of purchase and ownership(ERC721) .

## Why ENS?

<li>The primary use case is that domains can now be used instead of entering the long wallet addresses.
<li>Apart from the primary use case, it also has support for storing addresses for transactions of cryptos belonging to different blockchains apart from ETH like bitcoin, Dogecoin , etc.
<li>We can also store other info in text fields (similar to TXT record of DNS) like twitter IDs, telegram IDs, github profiles etc.
<li>The ENS domain can also be mapped to open a regular website just like a normal domain would. 

## Steps to create a ENS 

<li>Search the name for your ENS.
<li>Follow the three steps on the ENS website to create an ENS domain. https://app.ens.domains/name/
<li>ENS domain will only be created if there are two transactions from the wallet to verify the user.

## Terminologies
<li>Controller: The account that may edit the records of a name. The Controller may be changed by the Registrant or Controller.
<li>Namehash: The algorithm used to process an ENS name and return a cryptographic hash uniquely identifying that name.
<li>Registrar: A registrar is a contract responsible for allocating subdomains. Registrars can be configured at any level of ENS, and are pointed to by the owner field of the registry.
<li>Resolver: A resolver is a contract that maps from name to the resource (e.g., cryptocurrency addresses, content hash, etc). Similar to how a nameserver works in web domains.


## References
<li>ENS visualized in Opensea as an NFT https://testnets.opensea.io/0x635b6de4b6b3d01ef90daef31e112298700b8a57?referrer=%2Faccount&tab=activity
<li>https://medium.com/rippleventures/ens-vs-dns-c05ba7116263  (ENS & DNS)
<li>https://medium.com/the-ethereum-name-service/everything-you-can-do-with-your-ens-name-right-now-9a66763e970a (Functionalities of ENS)
<li>https://medium.com/the-ethereum-name-service/35-wallets-are-now-signed-up-to-support-ens-multi-coin-update-721ed26d65b8 (Multicoin and Multichain txns)
<li>https://medium.com/the-ethereum-name-service/list-of-ens-names-that-resolve-to-tor-onion-websites-99140a4c674f (Tor.onion- Dark web)
