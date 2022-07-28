import { Container } from "react-bootstrap";
import CarouselCard from "./CarouselCard";
import Header from "./Header";
import background from '../icon/bg1.jpg'
import CoinsTable from "./CoinsTable";

const Home = () => {
    return ( 
        <Container>
            <div style={{
                backgroundImage: `url(${background})`,
                }}>
                <Header />
                <CarouselCard />
            </div>
            <br />
            <CoinsTable />
        </Container>
     );
}
 
export default Home;