import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Row , Col, Carousel } from "react-bootstrap";
import { TrendingCoins } from "../config/api";
import { CryptoState } from "../CryptoContext";
import '../App.css';
import Coins from "./Coins";


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

    //console.log(trendingCoins.length)
 
    return ( 
        <Container className="m-3 p-2 mt-4">
            {
                    trendingCoins && trendingCoins.length > 0 ? 
                    (
                      <Carousel interval={2000}
                                autoPlay={true}
                                controls={false}
                                indicators={false}
                                style={{justifyItems:"center"}}>
                         <Carousel.Item >
                            <Coins coin={trendingCoins.slice(0,3)} />
                         </Carousel.Item>
                         <Carousel.Item >
                            <Coins coin={trendingCoins.slice(3,6)} />
                         </Carousel.Item>
                         <Carousel.Item>
                            <Coins coin={trendingCoins.slice(6,9)} />
                         </Carousel.Item>
                      </Carousel>
                    )
                   : <h2>Oops! Cannot Fetch Data...</h2>
                }
        </Container>
     );
}
 
export default CarouselCard;

