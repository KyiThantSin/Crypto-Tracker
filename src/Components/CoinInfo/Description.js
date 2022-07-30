import { Container, Col, Row } from "react-bootstrap";
import { CryptoState } from "../../CryptoContext";

const Description = (props) => {
    const {currency} = CryptoState();
    console.log(currency.toLowerCase())
    const sentence = props.coin.description?.en.split('.')[0];

    return ( 
        <Container className="mt-4">
            <Row className="justify-content-md-center">
                <Col xs={12} md={3} >
                    <img src={`${props.coin.image?.large}`} 
                    alt={props.coin.name}
                    style={{alignItems:"center"}}/>
                </Col>
            </Row>
            <h1 className="mt-3"
                style={{textAlign:"center",fontWeight:"bold"}}>
                    {props.coin.name}
            </h1>
            <p style={{fontSize:"20px"}}
                className="mt-3">
                {sentence}.
            </p>
            <h3 style={{fontWeight:"bold"}}>
                Rank: {props.coin.coingecko_rank}
            </h3>

            <h3 style={{fontWeight:"bold"}}
                className="mt-2">
                Current Price: {props.coin.current_price?.[`${currency.toLowerCase()}`]}
            </h3>

            <h3 style={{fontWeight:"bold"}}
                className="mt-2 mb-3">
                Market Cap: {props.coin.coingecko_rank}
            </h3>
            
        </Container>
     );
}
 
export default Description;