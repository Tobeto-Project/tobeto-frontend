import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const ContactSection = () => {
    return (
        <Container
            className="bg-dark-purple py-8 px-4 mx-7 "
            style={{
                borderRadius: '25px',
                margin: 'auto',
                backgroundColor: '#221C3A',
            }}
        >
            <Row className="d-flex align-items-center justify-content-between py-5">
                <Col lg={9} xs={12} className="m-0">
                    <p className="text-white mw-5xl m-0">
                        Kurumlara özel eğitim paketleri ve bootcamp programları için bizimle iletişime geçin.
                    </p>
                </Col>
                <Col lg={3} xs={12}>
                    <Button className="btn-secondary w-100 m-0 " href="/iletisim">
                        Bize Ulaşın
                    </Button>
                </Col>
            </Row>
        </Container>
    );
};

export default ContactSection;
