import Card from "react-bootstrap/Card";
import Header from "./Header";
import Transact from "./Transact";





function Body() {
  return (
        <Card className="bg-dark text-white">
            <Card.Img src="1_pic.jpg" style={{height:"100vh"}} alt="Card image" />
            <Card.ImgOverlay>
                <Header/>
                {/* <Transact/> */}
            </Card.ImgOverlay>
        </Card>
  );
}

export default Body;