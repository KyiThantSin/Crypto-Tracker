import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Spinner, Table } from "react-bootstrap";
import { CoinList } from "../../config/api";
import { CryptoState } from "../../CryptoContext";
import { Row, Col} from "react-bootstrap";
import { numberWithCommas } from "../MainPageHeader/Coins";
import SearchCoin from "../SearchCoin";
import FavCoin from "./FavCoin";
import Pagination from 'react-bootstrap/Pagination';
import { Link } from "react-router-dom";
import '../../App.css';

const CoinsTable = () => {
    const [coinLists , setCoinLists] = useState('');
    const [loading, setLoading] = useState(false)
    const [searchCoin , setSearchCoin] = useState('');
    const [page, setPage] = useState(1);

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
            setSearchCoin(handleSearch);  
    }
    
    const tableData = searchCoin ? searchCoin : coinLists;

    //pagination
    const onPaginationHandler = (number) =>{
        setPage(number)
        window.scroll(0,0)
    }

    let items = [];
        for (let number = 1; number <= (tableData.length/10); number++) {
        items.push(
            <Pagination.Item key={number} active={number === page}
                            onClick={() => onPaginationHandler(number)}>
                {number}
            </Pagination.Item>,
        );
        }
    return ( 
        <Container>
            <h4>Cryptocurrency Prices by Market Cap</h4>

            <SearchCoin onSearchEvent={onSearchEvent} />

            <div className="mt-4">
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
                                tableData && tableData.slice((page-1)*10,(page-1)*10 + 10).map((coin)=>{
                                    const profit = coin.market_cap_change_percentage_24h >= 0;

                                    return(
                                        <tr style={{textAlign:"center"}} key={coin.id}>
                                            <td>
                                                <FavCoin />
                                            </td>
                                            <td>
                                                <Link to={`/home/${coin.id}`}
                                                     style={{textDecoration:"none"}}>
                                                    <Row>
                                                        <Col md={3} >
                                                            <img src={`${coin.image}`} alt={coin.name}
                                                                style={{width:"50px", marginLeft:"8px"}}/>
                                                        </Col>
                                                        <Col md={9} className="mt-2">
                                                            <h5 style={{fontWeight:"bold"}}
                                                                className="coin-name">
                                                                {coin.symbol.toUpperCase()}
                                                            </h5>
                                                            {coin.name}
                                                        </Col>
                                                    </Row>
                                                </Link>
                                                
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
                                                {numberWithCommas(coin.market_cap).toString().slice(0,-6)}M
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </Table>             
            }  
            </div>

            <Pagination className="mt-4 float-end ml-3 mb-4">
                        {items}
            </Pagination>
                
        </Container>
     );
}
 
export default CoinsTable;