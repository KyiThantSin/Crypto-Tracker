import { useState } from "react";
import { Button, Container, Form,Row, Col } from "react-bootstrap";

const SearchCoin = (props) => {
    const [keyword, setKeywords] = useState('');

    const onClickHandler = (e) =>{
        e.preventDefault();
        props.onSearchEvent(keyword);
        setKeywords('');
    }

    return ( 
        <Container>
            <Form>
                <Row>
                    <Col md={8} xs={8}>
                        <Form.Control type="text" 
                                    required
                                    placeholder="Search For a Crypto Currency..."
                                    onChange={(e)=>setKeywords(e.target.value)}/>
                    </Col>
                    <Col md={4} xs={4}>
                        <Button type="button"
                            variant="outline-primary" 
                            onClick={onClickHandler}>Search</Button>
                    </Col>
                </Row>
            </Form>
        </Container>
     );

}
 
export default SearchCoin;
    
 