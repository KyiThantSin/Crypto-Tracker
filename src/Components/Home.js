import { Container } from "react-bootstrap";
import CarouselCard from "./MainPageHeader/CarouselCard";
import Header from "./MainPageHeader/Banner";
import background from '../icon/bg1.jpg'
import CoinsTable from "./CoinsTable/CoinsTable";

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