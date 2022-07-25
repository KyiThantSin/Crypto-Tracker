import axios from "axios";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { TrendingCoins } from "../config/api";
import { CryptoState } from "../CryptoContext";
import '../App.css';
import AliceCarousel from "react-alice-carousel";

const CarouselCards = () => {
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
    const items = trendingCoins?.map((coin)=>{
        return(
            <Container key={coin.id}>
                <h3>{coin.name}</h3>
            </Container>
        )
    })

    const responsive = {
        0: {
          items: 2,
        },
        512: {
          items: 4,
        },
      };

      
    return ( 
        <Container>
            {
                    trendingCoins && trendingCoins.length > 0 ? 
                    <AliceCarousel 
                    mouseTracking
                    infinite
                    autoPlayInterval={1000}
                    animationDuration={1500}
                    disableDotsControls
                    disableButtonsControls
                    responsive={responsive}
                    items={items}
                    autoPlay
                    />
                   : <h2>Oops! Cannot Fetch Data...</h2>
                }
        </Container>
     );
}
 
export default CarouselCards;
