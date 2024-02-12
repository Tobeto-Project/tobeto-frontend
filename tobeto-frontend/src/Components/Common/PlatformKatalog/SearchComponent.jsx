import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, InputGroup, FormControl, Button } from 'react-bootstrap';

const SearchComponent = () => {
    return (
        <Container className="text-center mx-5 w-50" style={{ backgroundColor: 'rgba(128, 0, 128, 0.5)', padding: '50px' }}>
            <h2 className="text-light fs-1">Öğrenmeye Başla!</h2>
            <Row className="mt-4 justify-content-center " >
                <Col md="11" >
                    <InputGroup >
                        <FormControl className=' rounded-pill' placeholder="Eğitim arayın" />
                        <Button variant="outline-light">
                            <i className="bi bi-search"></i> Search
                        </Button>
                    </InputGroup>
                </Col>
            </Row>
        </Container>

    );
};

export default SearchComponent;
