import { Container, Form } from "react-bootstrap";

const SearchCoin = () => {
    return ( 
        <Container>
            <Form>
                <Form.Label>
                    Search For a Crypto Currency...
                </Form.Label>
                <Form.Control type="text"/>
            </Form>
        </Container>
     );
}
 
export default SearchCoin;