import axios from "axios";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { TrendingCoins } from "../config/api";
import { CryptoState } from "../CryptoContext";

const CarouselCard = () => {
    const {currency} = CryptoState();
    console.log(currency)
    const [trendingCoins, setTrendingCoins] = useState();

    //fetch data
    const fetchTrendingCoins = async ()=>{
        const { data } = await axios.get(TrendingCoins(currency))
        setTrendingCoins(data)
    }

    useEffect(()=>{
        fetchTrendingCoins();
    },[currency])

    console.log(trendingCoins)

    return ( 
        <Container>
            <h1>Carousel</h1>
        </Container>
     );
}
 
export default CarouselCard;