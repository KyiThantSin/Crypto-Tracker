import { Container, Col, Row } from "react-bootstrap";
import { CryptoState } from "../../CryptoContext";
import { numberWithCommas } from "../MainPageHeader/Coins";
import ReactHtmlParser from 'html-react-parser'

const Description = (props) => {
    const {currency,symbol} = CryptoState();

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
                {ReactHtmlParser(`${props.coin?.description?.en.split('. ')[0]}`)}.
            </p>
            <h4 style={{fontWeight:"bold"}}>
                Rank: {props.coin.coingecko_rank}
            </h4>

            <h4 style={{fontWeight:"bold"}}
                className="mt-2">
                Current Price: <b>{symbol}</b> {numberWithCommas(props.coin.market_data?.current_price?.[`${currency.toLowerCase()}`])}
            </h4>

            <h4 style={{fontWeight:"bold"}}
                className="mt-2 mb-3">
                Market Cap: {numberWithCommas(props.coin.market_data?.market_cap?.[`${currency.toLowerCase()}`])?.toString().slice(0,-6)} M
            </h4>
            
        </Container>
     );
}
 
export default Description;