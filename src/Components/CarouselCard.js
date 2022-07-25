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
        <Container>
            {
                    trendingCoins && trendingCoins.length > 0 ? 
                    (
                      <Carousel interval={2000}
                                autoPlay={true}
                                controls={false}
                                indicators={false}
                                className="items">
                         <Carousel.Item >
                            <Coins coin={trendingCoins.slice(0,4)}/>
                         </Carousel.Item>
                         <Carousel.Item>
                            <Coins coin={trendingCoins.slice(4,8)}/>
                         </Carousel.Item>
                      </Carousel>
                    )
                   : <h2>Oops! Cannot Fetch Data...</h2>
                }
        </Container>
     );
}
 
export default CarouselCard;

/***
 *  trendingCoins.map((coin) => {
                        return(
                            <Carousel>
                                <Carousel.Item>
                                <Col key={coin.id} md={3} xs={6} className="p-4">
                                    <Coins coin={coin}/>
                                </Col>
                                </Carousel.Item>
                            </Carousel>
                        )
                    }) 
 */