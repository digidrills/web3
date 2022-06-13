# Concept of Block

## Structure of a Block

---
<li>timestamp - the time when the block was mined (created).
<li>blockNumber - the length of the blockchain in blocks.
<li>baseFeePerGas - the minimum fee per gas required for a transaction to be included in the block
<li>difficulty - effort required to mine the block. (basically generating a hash         with specified number of zeros at the beginning of the hash)
<li>mixHash - hash of the current block
<li>parentHash - hash of the previous block
<li>Transactions - all the transactions in the block
<li>Nonce - a random number required for miners to generate a hash starting with a certain number of zeros at the beginning (which is mining)

---

### Note : Time required to mine(create) a block is generally around 12 to 14 seconds for ethereum blockchain

---

## Why a nonce?

---
A miner needs to generate a block with a hash that starts with a certain number of zeros. Since the transactions in the block cannot be altered, a random value or rather a number is required to do so. Hence the miner needs to find the correct number(i.e nonce) such that the correct hash for the block is generated. 

The difficulty level corresponds to the number of zeros, required at the beginning of the hash during the creation of the block.

## References

---
<li>Official Documentation : <a href="https://ethereum.org/en/developers/docs/blocks/" target="_blank">https://ethereum.org/en/developers/docs/blocks/</a>
<li>Understanding the block : <a href="https://www.youtube.com/watch?v=_160oMzblY8" target="_blank">https://www.youtube.com/watch?v=_160oMzblY8</a>


## Resources

---
<li>Visualization of block : <a href="https://andersbrownworth.com/blockchain/block" target="_blank">https://andersbrownworth.com/blockchain/block</a>
