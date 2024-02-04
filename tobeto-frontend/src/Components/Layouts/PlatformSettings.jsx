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
                    <Row className='mt-5'>
                        <Col md={6}>
                            <button className='w-100 btn btn-primary m-0' >
                                Şifre Değiştir
                            </button>
                        </Col>
                        <Col md={6}>
                            <button className='w-100 btn btn-danger rounded-pill'>
                            Üyeliği Sonlandır
                            </button>
                        </Col>
                    </Row>
                </Form>
            </Container>

        </div>
    )
}

export default PlatformSettings