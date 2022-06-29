### RECURRING BILLING

Recurring billing is a payment model that enables business owners to charge their customers at predefined intervals (weekly, monthly, annually, or custom intervals), for the products or services they purchase.

#### Recurring Billing in Blockchain
There are two ways to implement recurring billing in smart contracts

###### Hard code recurring billing functionality directly into a smart contract. 
<li>However, in Ethereum and many other “truly” decentralized platforms, once a token smart contract is created, it cannot changed anymore.</li><br>

###### Using the extendable options present in ERC20 standard without compromising security.
<li>According to ERC20 standard, a token smart contract must implement the approve and transferFrom functions, which create a complete framework allowing the extension of token functionality in any arbitrary way.</li> <br>
<li>A second smart contract is written, and then users approve this contract to charge their tokens. </li> <br>
<li>Thus, allowing a smart contract to charge tokens is an analog to signing a paper contract, where you have an exact statement (smart contract code) of how your tokens will be used.</li> <br>

<img align="centre" src="https://github.com/digidrills/web3-samples/blob/main/docs/figures/recurring_b1.png" width="400px" height="250px" /><br>
#### Working of Recurring billing

<br>1. Merchants insert themselves into a smart contract and retrieve a Merchant ID, which is used to identify the merchant  with which the customer agrees.
<br><br>2. The customer allows a recurring billing smart contract to charge their tokens. At this step, the smart contract still does not allow the merchant nor anyone else to benefit from the customer and does not charge the customer.
<br><br>3. The customer tells the recurring billing smart contract that it’s allowing a particular recurring billing, providing the ID of the merchant and billing properties defined by the merchant like period and value.
<br><br>4. From this moment, the merchant can charge the customer’s account by making a charge transaction to a smart contract, but not more than once in a specified period of time. On each charge, tokens go directly from the customer’s account to the merchant’s beneficiary account.

<img src="https://github.com/digidrills/web3-samples/blob/main/docs/figures/recurring_b2.png" width="400px" height="250px" /><br>
