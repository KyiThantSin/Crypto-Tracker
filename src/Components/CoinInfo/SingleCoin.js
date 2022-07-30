import axios from "axios";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { CryptoState } from "../../CryptoContext";
import { SingleCoin } from "../../config/api";
import Description from "./Description";

const SingleCoinInfo = () => {    
    const { currency } = CryptoState();
    const [coinInfo , setCoinInfo] = useState('');
    //params
    const {id} = useParams();

    //fetch single data
    const fetchCoinInfo = async () => {
        const {data} = await axios.get(SingleCoin(id));
        console.log(data);
        setCoinInfo(data);
    }

    useEffect(()=>{
        fetchCoinInfo();
    },[id])
    
    return ( 
        <Container>
            <Description coin={coinInfo} />
        </Container>
     );
}
 
export default SingleCoinInfo;