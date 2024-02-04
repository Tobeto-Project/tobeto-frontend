import React from 'react'
import { Container, Form, Row, Col, Button } from "react-bootstrap";


const PlatformSettings = () => {
    return (
        <div>
            <Container>
                <Form>
                    <Row>
                        <Col md={4}>
                            <Form.Group controlId="formOldPassword">
                                <Form.Label className='mb-0'>Eski Şifre*</Form.Label>
                                <Form.Control type="password" required />
                            </Form.Group>
                        </Col>
                        <Col md={4}>
                            <Form.Group controlId="formNewPassword">
                                <Form.Label className='mb-0'>Yeni Şifre*</Form.Label>
                                <Form.Control type="password" required />
                            </Form.Group>
                        </Col>
                        <Col md={4}>
                            <Form.Group controlId="formNewPassword2">
                                <Form.Label className='mb-0'>Yeni Şifre Tekrar*</Form.Label>
                                <Form.Control type="password" required />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Button className='mb-2 w-100' variant="primary" type="submit">
                                Şifre Değiştir
                            </Button>
                        </Col>
                        <Col>
                            <Button className='btn-danger mb-2 w-100' variant="primary" type="submit">
                                Üyeliği Sonlandır
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </Container>

        </div>
    )
}

export default PlatformSettings