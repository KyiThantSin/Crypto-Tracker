import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Container, Spinner } from "react-bootstrap";
import { Line } from "react-chartjs-2";
import {Chart , registerables} from 'chart.js';
import { HistoricalChart } from "../../config/api";
import { CryptoState } from "../../CryptoContext";
import { chartDates} from "../../config/chartDates";
Chart.register(...registerables)

const Histographic = (props) => {
    //console.log(props.coin)
    const {currency} = CryptoState();
    const [days,setDays] = useState(1);
    const [historicData , setHistoricData] = useState();

    const fetchHistoricData = async () => {
        const { data } = await axios.get(HistoricalChart(props.coin.id,currency.toLowerCase(), days));
        //console.log(data.prices)
        setHistoricData(data.prices);
      };

    useEffect(()=>{
        if(props.coin.id){
            fetchHistoricData();
        }
    },[days,props.coin])

    return ( 
        <Container className="mt-4">
            {
                !historicData ? <Spinner animation="border" 
                                         variant="primary" 
                                         style={{marginLeft:"50px"}}/> //for loading
                            : <Line 
                                data={{
                                    labels: historicData.map((coin)=>{
                                        //label date for hours
                                        const date = new Date(coin[0]);
                                        const time = date.getHours() > 12 ?
                                            `${date.getHours()-12} : ${date.getHours()} PM`
                                            : `${date.getHours()} : ${date.getHours()} AM`
                                        
                                        return days === 1 ? time : date.toLocaleDateString();
                                    }),     
                                    datasets:[
                                        {
                                            data: historicData.map(coin =>coin[1]),
                                            label: `Price ( Past ${days} Days ) in ${currency}`,
                                            borderColor: "#FFCF3A"
                                        }
                                    ]
                                }}
                                //options
                                options={{
                                    elements: {
                                      point: {
                                        radius: 1,
                                      },
                                    },
                                  }}
                            />
                //btn for setDays
             
        }
       <div className="mt-4">
            {
                 chartDates.map((days)=>{
                    return (
                         <Button key={days.value}
                                 variant="outline-dark"
                                 onClick={()=> setDays(days.value)}
                                 className="m-3 p-2">
                             {days.label}
                         </Button>
                    )
                 })
            }
       </div>
        </Container>
     );
}
 
export default Histographic;