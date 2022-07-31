import axios from "axios";
import { useEffect, useState } from "react";
import { Container , Row , Col} from "react-bootstrap";
import { useParams } from "react-router-dom";
import { CryptoState } from "../../CryptoContext";
import { SingleCoin } from "../../config/api";
import Description from "./Description";
import Histographic from "./Histographic";

const SingleCoinInfo = () => {    
    const [coinInfo , setCoinInfo] = useState('');
    //params
    const {id} = useParams();

    //fetch single data
    const fetchCoinInfo = async () => {
        const {data} = await axios.get(SingleCoin(id));
        //console.log(data);
        setCoinInfo(data);
    }

    useEffect(()=>{
        fetchCoinInfo();
    },[id])
    
    return ( 
        <Container className="mt-4">
            <Row>
                <Col md={4} style={{borderRight:"1px solid rgb(72, 68, 6"}}>
                    <Description coin={coinInfo} />
                </Col>
                <Col md={8}>
                    <Histographic coin={coinInfo} />
                </Col>
            </Row>
            
        </Container>
     );
}
 
export default SingleCoinInfo;