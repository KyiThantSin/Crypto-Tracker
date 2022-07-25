import { Container , Row, Col} from "react-bootstrap";

const Coins = (props) => {
    console.log(props.coin)
    return ( 
        <Container>
            <Row>
                {
                    props.coin && props.coin.map((item)=>{
                        return (
                            <Col md={3} xs={6} key={item.id}>
                                <img src={`${item.image}`} 
                                    alt={item.name} 
                                    width="60px"/>
                                <h3>{item.name}</h3>
                            </Col>
                        )
                    })
                }
            </Row>
        </Container>
     );
}
 
export default Coins;