//import './App.css';
import { useState, useEffect } from "react";
import { ethers } from "ethers";
import erc20abi from "./ERC20abi.json";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Badge from "react-bootstrap/Badge"

function Transact() {

  //web 3 send to escrow modal
  const [showSendToEscrow, setSendToEscrow] = useState(false);

  const handleClose_sendToEscrow = () => setSendToEscrow(false);
  const handleShow_sendToEscrow = () => setSendToEscrow(true);
  //web3 balance modal
  const [showBalance, setBalance] = useState(false);

  const handle_Balance = () => setBalance(false);
  const handleShow_Balance = () => {
    getMyBalance();
    setBalance(true);
  }
  //web3 Minter registering
  const [showMinter, setMint] = useState(false);
  const handle_Mint = () => setMint(false);
  const handleShow_Mint = () => setMint(true);

  //web3 Escrow to Buyer
  const [showEscrowtoBuyer, setEscrowToBuyer] = useState(false);
  const handleClose_EscrowToBuyer = () => setEscrowToBuyer(false);
  const handleShow_EscrowToBuyer = () => setEscrowToBuyer(true);

  //web3 wallet functions
  const [txs, setTxs] = useState([]);
  const [contractListened, setContractListened] = useState();
  const [error, setError] = useState();
  const [contractInfo, setContractInfo] = useState({
    address: "-",
    mintAddr: "-",
    escrowAddr: "-"
  });
  const [balanceInfo, setBalanceInfo] = useState({
    address: "-",
    balance: "-"
  });

  useEffect(() => {
    async function fetch(){
        const provider = new ethers.providers.Web3Provider(window.ethereum);

    const erc20 = new ethers.Contract("0x772f9123e1949e7cb241a36b6b0cd98d255e02df", erc20abi, provider);
    const mintAddr = await erc20.minter();
    const escrowAddr = await erc20.escrow();

        setContractInfo({
      address:"0x772f9123e1949e7cb241a36b6b0cd98d255e02df",
      mintAddr,
      escrowAddr
        });
    }
    fetch();
    if (contractInfo.address !== "-") {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const erc20 = new ethers.Contract(
        contractInfo.address,
        erc20abi,
        provider
      );
      setContractListened(erc20);

      return () => {
        contractListened.removeAllListeners();
      };
    }
  }, [contractInfo.address]);

  const handleMinter = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = await provider.getSigner();
    const erc20 = new ethers.Contract(contractInfo.address, erc20abi, signer);
    await erc20.mint(data.get("reciever"),data.get("assetid") ,data.get("o_name"),data.get("price"),data.get("doc_link"),data.get("latitude"),data.get("longitude"));
  };

  const getMyBalance = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const erc20 = new ethers.Contract(contractInfo.address, erc20abi, provider);
    const signer = await provider.getSigner();
    const signerAddress = await signer.getAddress();
    const balance = await erc20.getResult(signerAddress);
    console.log(balance)
    setBalanceInfo({
      address: signerAddress,
      balance: String(balance)
    });
  };

  const handleSendEscrow = async(e) =>{ 
    e.preventDefault();
    const data = new FormData(e.target);
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = await provider.getSigner();
    const erc20 = new ethers.Contract(contractInfo.address, erc20abi, signer);
    await erc20.sellertoescrow(data.get("seller"),data.get("assetid"));
  };

  const handleEscrowBuyer= async(e) =>{
    e.preventDefault();
    const data = new FormData(e.target);
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = await provider.getSigner();
    const erc20 = new ethers.Contract(contractInfo.address, erc20abi, signer);
    await erc20.escrowtobuyer(data.get("buyer"),data.get("assetid"));
  }


  //ends web3 wallet functions
  
  
  
  return (
    <div>
    <Navbar collapseOnSelect expand="lg" bg="transparent" variant="dark">
        <Container>
            <Navbar.Brand href="#home" className="text-warning">AssetLedger</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                <Nav.Link href="#features" className="text-warning">Home</Nav.Link>
                <Nav.Link href="#pricing" className="text-warning">My Assets</Nav.Link>
                </Nav>
                <Nav>
                    
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
                    <div style={{display:"flex",flexDirection:"column",textAlign:"center", marginTop:"8%"}}>
                        <div>
                            <Button style={{width:"30%",margin:"1%"}} variant="outline-dark" onClick={handleShow_Mint}>Create/Register Property</Button>
                        </div>
                        <div>
                            <Button style={{width:"30%",margin:"1%"}} variant="outline-dark" onClick={handleShow_Balance}>Balance</Button>
                        </div>
                        <div>
                            <Button style={{width:"30%",margin:"1%"}} variant="outline-dark" onClick={handleShow_sendToEscrow}>Send To Escrow</Button>
                        </div>
                        <div>
                            <Button style={{width:"30%",margin:"1%"}} variant="outline-dark" onClick={handleShow_EscrowToBuyer}>Escrow To Buyer</Button>
                        </div>
                    </div>
                    
      <Modal show={showSendToEscrow} onHide={handleClose_sendToEscrow}>
          <Modal.Header closeButton>
              <Modal.Title>Send To Escrow</Modal.Title>
          </Modal.Header>

          <Modal.Body>
          {/* <form onSubmit={handleSendEscrow}>
              <div className="my-3">
                <input
                  type="text"
                  name="seller"
                  className="input input-bordered block w-full focus:ring focus:outline-none"
                  placeholder="seller address"
                />
              </div>
              <div className="my-3">
                <input
                  type="text"
                  name="assetid"
                  className="input input-bordered block w-full focus:ring focus:outline-none"
                  placeholder="assetid"
                />
              </div>
              <footer className="p-4">
                <button
                  type="submit"
                  className="btn btn-primary submit-button focus:ring focus:outline-none w-full"
                >
                  Transfer
                </button>
              </footer>
            </form> */}
            <Form onSubmit={handleSendEscrow}>
                <Form.Group className="mb-3" controlId="seller">
                    <Form.Label>Seller address</Form.Label>
                    <Form.Control type="text" name="seller" placeholder="Seller Address" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="assetid">
                    <Form.Label>AssetID</Form.Label>
                    <Form.Control type="text" name="assetid" placeholder="Enter AssetID" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
          </Modal.Body>

          {/* <Modal.Footer>
              <Button variant="primary" onClick={handleClose}>Register</Button>
          </Modal.Footer> */}
      </Modal>
      <Modal show={showEscrowtoBuyer} onHide={handleClose_EscrowToBuyer}>
          <Modal.Header closeButton>
              <Modal.Title>Escrow To Buyer</Modal.Title>
          </Modal.Header>

          <Modal.Body>
          {/* <form onSubmit={handleEscrowBuyer}>
              <div className="my-3">
                <input
                  type="text"
                  name="buyer"
                  className="input input-bordered block w-full focus:ring focus:outline-none"
                  placeholder="buyer address"
                />
              </div>
              <div className="my-3">
                <input
                  type="text"
                  name="assetid"
                  className="input input-bordered block w-full focus:ring focus:outline-none"
                  placeholder="assetid"
                />
              </div>
              <footer className="p-4">
                <button
                  type="submit"
                  className="btn btn-primary submit-button focus:ring focus:outline-none w-full"
                >
                  Transfer
                </button>
              </footer>
            </form> */}
            <Form onSubmit={handleEscrowBuyer}>
                <Form.Group className="mb-3" controlId="buyer">
                    <Form.Label>Buyer address</Form.Label>
                    <Form.Control type="text" name="buyer" placeholder="Seller Address" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="assetid">
                    <Form.Label>AssetID</Form.Label>
                    <Form.Control type="text" name="assetid" placeholder="Enter AssetID" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
          </Modal.Body>
      </Modal>
      <Modal show={showBalance} onHide={handle_Balance}>
          <Modal.Header closeButton>
              <Modal.Title>Balance</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <div>
              Address : 
              <div>
                <Badge style={{padding:"3%"}} bg="primary">{balanceInfo.address}</Badge>
              </div>
              balanceInfo:{balanceInfo.balance}
            </div>
          </Modal.Body>
      </Modal>

      <Modal show={showMinter} onHide={handle_Mint}>
          <Modal.Header closeButton>
              <Modal.Title>Create Property</Modal.Title>
          </Modal.Header>

          <Modal.Body>
          {/* <div className="m-4 credit-card w-full lg:w-3/4 sm:w-auto shadow-lg mx-auto rounded-xl bg-white">
          <div className="mt-4 p-4">
            <h1 className="text-xl font-semibold text-gray-700 text-center">
              Create Asset
            </h1>

            <form onSubmit={handleMinter}>
              <div className="my-3">
                <input
                  type="text"
                  name="reciever"
                  className="input input-bordered block w-full focus:ring focus:outline-none"
                  placeholder="Reciever address"
                />
              </div>
              <div className="my-3">
                <input
                  type="text"
                  name="assetid"
                  className="input input-bordered block w-full focus:ring focus:outline-none"
                  placeholder="AssetID"
                />
              </div>
              <div className="my-3">
                <input
                  type="text"
                  name="o_name"
                  className="input input-bordered block w-full focus:ring focus:outline-none"
                  placeholder="o_name"
                />
              </div>
              <div className="my-3">
                <input
                  type="text"
                  name="price"
                  className="input input-bordered block w-full focus:ring focus:outline-none"
                  placeholder="price"
                />
              </div>
              <div className="my-3">
                <input
                  type="text"
                  name="doc_link"
                  className="input input-bordered block w-full focus:ring focus:outline-none"
                  placeholder="doc_link"
                />
              </div>
              <div className="my-3">
                <input
                  type="text"
                  name="latitude"
                  className="input input-bordered block w-full focus:ring focus:outline-none"
                  placeholder="latitude"
                />
              </div>
              <div className="my-3">
                <input
                  type="text"
                  name="longitude"
                  className="input input-bordered block w-full focus:ring focus:outline-none"
                  placeholder="longitude"
                />
              </div>
              <footer className="p-4">
                <button
                  type="submit"
                  className="btn btn-primary submit-button focus:ring focus:outline-none w-full"
                >
                  Create/Register
                </button>
              </footer>
            </form>
          </div>
        </div> */}
            <Form onSubmit={handleMinter}>
                <Form.Group className="mb-3" controlId="reciever">
                    <Form.Label>Property Owner Address</Form.Label>
                    <Form.Control type="text" name="reciever" placeholder="Property Owner Address" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="assetid">
                    <Form.Label>AssetID</Form.Label>
                    <Form.Control type="text" name="assetid" placeholder="Enter AssetID" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="o_name">
                    <Form.Label>Owner Name</Form.Label>
                    <Form.Control type="text" name="o_name" placeholder="Enter Owner Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="price">
                    <Form.Label>Price</Form.Label>
                    <Form.Control type="text" name="price" placeholder="Enter Price" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="doc_link">
                    <Form.Label>Document Link</Form.Label>
                    <Form.Control type="text" name="doc_link" placeholder="Enter Document Link" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="latitude">
                    <Form.Label>Latitude </Form.Label>
                    <Form.Control type="text" name="latitude" placeholder="Enter the Latitude" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="longitude">
                    <Form.Label>Longitude</Form.Label>
                    <Form.Control type="text" name="longitude" placeholder="Enter the Longitude" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
          </Modal.Body>
      </Modal>



      </div>
  );
}

export default Transact;
