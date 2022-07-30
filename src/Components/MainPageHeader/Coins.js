import { Container , Row, Col} from "react-bootstrap";
import { CryptoState } from "../../CryptoContext";

export function numberWithCommas(x){
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

const Coins = (props) => {
    const {symbol} = CryptoState();

    //console.log(props.coin)

    return ( 
        <Container>
            <Row>
                {
                    props.coin && props.coin.map((item)=>{
                        const profit = item.price_change_percentage_24h >= 0;
                        return (
                            <Col md={4} xs={4} key={item.id}>
                                <img src={`${item.image}`} 
                                    alt={item.name} 
                                    width="55px"/>
                                <br />
                                <span className="mt-3" 
                                        style={{fontSize:"18px", fontWeight:"400"}}>
                                    {item.symbol.toUpperCase()}
                                    &nbsp; 
                                    <span style={{
                                        color: item.price_change_percentage_24h > 0 ? "green" : "red"
                                        }}>
                                        {profit && '+'}{item?.price_change_percentage_24h?.toFixed(2)}%
                                    </span>
                                </span>
                                <br />
                                <b>{symbol} {numberWithCommas(item.current_price)} </b>
                            </Col>
                        )
                    })
                }
            </Row>
        </Container>
     );
}
 
export default Coins;