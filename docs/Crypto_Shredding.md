### Crypto-Shredding 
<li>Crypto shredding is the concept of destroying data through the destruction of the cryptographic keys protecting the data. 
<li>The data is present in the database in the encrypted form and cannot be decrypted without the keys.
<li>So even though data is present it cannot be used.

### Why should we use Crypto-Shredding ? :
<li>If a user(customer) using the application wants his data to be erased from the database.Is it possible?
<li>Can the data be erased without any delay by the application manager ?
<li>Since the database has existing backup and recovery techniques will the data really be deleted is the question ?
<li>Hence to solve this the use of public/private keys is used.

### Procedure of this technique :
<li>Users' data is stored in the database after getting processed via an encryption algorithm.
<li>This data can be obtained to the user in human readable form after getting the decryption key that is owned by the user.
<li>The access to this data depends on how the key has been secured by the user.

### Drawbacks :
<li>Storage of the keys separately from the data.
<li>Even these keys would have backup present in the database. So permanent deletion of these keys is required.
<li>However, it’s extremely important to still back up the key store without it, all personal data of customers is unrecoverable.

### Use of Retention Period :
<li>To achieve the right to be forgotten, the backup retention period of the key store needs to be significantly reduced. 
<li>This ensures deleted keys are removed promptly.
<li>When deleting a customer record, both the record and the key should be deleted at the same time. 
<li>After the last backup containing the customer key is removed, the customer data is unrecoverable.

### Similar techniques :
<li>Password Hashing
<li>Credit card data encryption

### References :
<li>https://medium.com/@brentrobinson5/crypto-shredding-how-it-can-solve-modern-data-retention-challenges-da874b01745b
<li>https://en.wikipedia.org/wiki/Crypto-shredding
