# Concept of Mining

## Mining of ethereum transactions

---
<ol>
<li>A user sends a transaction request which is sent to the entire ethereum network.
<li>Each node in the network adds these transactions into a memory pool.
<li>Memory pool consists of those valid transactions which are not yet assigned to a block.
<li>A mining node then combines several of these transactions into a block such that
        <ul>
                <li>Transaction fee is maximum</li>
                <li>Total gas in the block does not exceed the gas limit.
                </li>
        </ul>
<li>Miner then validates each of those transactions and executes the code of the  request.
<li>A “proof of work” certificate is produced by the miner once all the transactions in a block are verified and executed.
<li>Miner then broadcasts the block to all the nodes in the network.
<li>Each node verifies the checksum of their new EVM state and compares it with the state of the block claimed by the miner.
<li>Once verified, all nodes add this block to the tail of the blockchain.
</ol>

## References

---
<li>Official Documentation : <a href="https://ethereum.org/en/developers/docs/consensus-mechanisms/pow/mining/" target="_blank">https://ethereum.org/en/developers/docs/consensus-mechanisms/pow/mining/</a>
<li>Useful Article : <a href="https://blog.goodaudience.com/how-a-miner-adds-transactions-to-the-blockchain-in-seven-steps-856053271476" target="_blank">https://blog.goodaudience.com/how-a-miner-adds-transactions-to-the-blockchain-in-seven-steps-856053271476</a>


