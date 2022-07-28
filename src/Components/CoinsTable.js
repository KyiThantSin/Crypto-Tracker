import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Spinner, Table } from "react-bootstrap";
import { CoinList } from "../config/api";
import { CryptoState } from "../CryptoContext";
import { Button , Row, Col} from "react-bootstrap";
import { numberWithCommas } from "./Coins";
import SearchCoin from "./SearchCoin";


const CoinsTable = () => {
    const [coinLists , setCoinLists] = useState('');
    const [loading, setLoading] = useState(false)
    const [searchCoin , setSearchCoin] = useState('');
    const [toggle, setToggle] = useState(false)
    //currency from CryptoState
    const {currency,symbol} = CryptoState();

    const fetchCoinLists  = async () => {
        setLoading(true)
        const {data} = await axios.get(CoinList(currency))
        setCoinLists(data)
        setLoading(false)
    }

    useEffect(()=>{
        fetchCoinLists();
    },[currency])

    //console.log(coinLists)

    //search coinLists
    const onSearchEvent = (keywords) =>{
       const handleSearch = coinLists.filter((coins)=> coins.name.toLowerCase().includes(keywords.toLowerCase()))
        console.log(handleSearch)
        setSearchCoin(handleSearch);
        
    }
    const tableData = searchCoin ? searchCoin : coinLists;

    //toggle fav icon
    const onToggleHandler = (id) =>{
        setToggle(!toggle);
    }

    return ( 
        <Container>
            <h5>Cryptocurrency Prices by Market Cap</h5>

            <SearchCoin onSearchEvent={onSearchEvent}/>

            <div className="mt-3">
            { loading ? <div style={{justifyContent:"center"}} className="p-2">
                            <Spinner animation="border" variant="primary" /> 
                            Loading...
                        </div> 
                    :  <Table bordered responsive>
                        <thead>
                            <tr style={{
                                fontWeight:"bold",
                                backgroundColor:"#FFCF3A",
                                textAlign:"center"
                                }}>
                                <th>#</th>
                                <th>Coin</th>
                                <th>Price</th>
                                <th>24h Change</th>
                                <th>Market Cap</th>
                            </tr>
                        </thead>                 
                        <tbody> 
                            {   //map coinLists tr
                                tableData && tableData.slice(0,5).map((coin)=>{
                                    const profit = coin.market_cap_change_percentage_24h >= 0;

                                    return(
                                        <tr style={{textAlign:"center"}} key={coin.id}>
                                            <td>
                                                <Button variant="light"
                                                        onClick={() => onToggleHandler(coin.id)}>
                                                    <img src={ toggle ? require('../icon/red.png') : require('../icon/heart.png')} 
                                                         alt="heart icon" 
                                                    />
                                                </Button>
                                            </td>
                                            <td>
                                                <Row>
                                                    <Col md={3} >
                                                        <img src={`${coin.image}`} alt={coin.name}
                                                            style={{width:"50px", marginLeft:"8px"}}/>
                                                    </Col>
                                                    <Col md={9} className="mt-2">
                                                       <h5 style={{fontWeight:"bold"}}>
                                                            {coin.symbol.toUpperCase()}
                                                        </h5>
                                                        {coin.name}
                                                    </Col>
                                                </Row>
                                            </td>
                                            <td>
                                               <b> {symbol} </b> {numberWithCommas(coin.current_price)}
                                            </td>
                                            <td>
                                                {
                                                profit ? <span style={{color:"green"}}>+ {coin.market_cap_change_percentage_24h.toFixed(2)} % </span>
                                                        : <span style={{color:"red"}}>{coin.market_cap_change_percentage_24h.toFixed(2)} % </span>
                                                }   
                                            </td>
                                            <td>
                                                {coin.market_cap}
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </Table>             
            }  
            </div>
                    
        </Container>
     );
}
 
export default CoinsTable;