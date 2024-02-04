import React from 'react'
import { Container, Form, Row, Col } from "react-bootstrap";

const PlatformMediaAccounts = () => {
    return (
        <div>
            <Container>
                <Form>
                    <Row >
                        <Col md={3}>
                            <Form.Group controlId="formSocialMedia">
                                <Form.Label className='mb-0'>Medya Hesabı</Form.Label>
                                <Form.Select name='SocialMedia' required>
                                    <option value="0">Seçiniz*</option>
                                    <option value="1">İnstagram</option>
                                    <option value="2">Twitter</option>
                                    <option value="3">Linkedin</option>
                                    <option value="4">Behance</option>
                                    <option value="5">Dribble</option>
                                    <option value="6">Github</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>
                    
                        <Col md={9}>
                        <Form.Group controlId="formUrl">
                        <Form.Label className='mb-0'>Url</Form.Label>
                                <Form.Control type="text" placeholder={"https://"}/>
                            </Form.Group>
                        </Col>
                    </Row>
                </Form>
            </Container>
        </div>
    )
}

export default PlatformMediaAccounts