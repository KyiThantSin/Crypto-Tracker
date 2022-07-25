import { Container } from "react-bootstrap";
import CarouselCard from "./CarouselCard";
import Header from "./Header";
import background from '../icon/bg1.jpg'

const Home = () => {
    return ( 
        <Container>
            <Header />
            <CarouselCard />
        </Container>
     );
}
 
export default Home;