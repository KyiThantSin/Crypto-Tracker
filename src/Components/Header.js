import { Container } from "react-bootstrap";
import background from '../icon/bg.png'

const Header = () => {
    return ( 
        <Container style={{
            backgroundImage:`url(${background})`,
        }}>
                <div style={{textAlign:"center"}} className="mt-4">
                <h1>
                    Crypto Tracker
                </h1>
                <p className="mt-3">Get All The Info Regarding Your Favorite Crypto Currency</p>
                </div>
        </Container>
     );
}
 
export default Header;