import { Container } from "react-bootstrap";

const NotFound = () => {
    return ( 
        <Container className="mt-5">
            <img src={require('../icon/notfound.jpg')} alt="404 vector"
                style={{marginLeft:"20px",width:"250px"}}/>
            <hr className="mt-5"/>
        </Container>
     );
}
 
export default NotFound;