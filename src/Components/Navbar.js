import { Container, Form , Row, Col} from "react-bootstrap";
import { CryptoState } from "../CryptoContext";

const Navbar = () => {
    const {currency, setCurrency} = CryptoState();
    //console.log(currency);
    return ( 
        <Container className="nav-bar p-2">
            <Row className="mt-3">

                <Col md={10} xs={6}>
                    <h4 style={{fontWeight:"600",color:"#F6BA00"}}>
                        Crypto Tracker
                    </h4>
                </Col>
                
                <Col md={2} xs={6}>
                    <Form.Select  
                                onChange={(e) => setCurrency(e.target.value)}
                                value={currency}>
                    <option value="USD">USD</option>
                    <option value="MMK">MMK</option>
                    </Form.Select>
                </Col>
            </Row>
        </Container>
     );
}
 
export default Navbar;