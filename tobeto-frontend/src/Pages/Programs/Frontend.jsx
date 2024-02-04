import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Frontend = () => {
    return (
        <div> <Container fluid>
            <Row className="align-items-center">
                {/* Front-End Developer Div */}
                <Col xs={12} lg={6} className="mt-32 order-last order-lg-first">
                    <div className="mw-md mx-auto pt-20 pb-24 px-8 px-md-12 px-xl-14 rounded bg-light" style={{ boxShadow: '8px 80px 138px rgba(0, 0, 0, 0.11)' }}>
                        <h3 className="mt-6 mb-8 text-center">Front-End Developer</h3>
                        <Button className="btn btn-primary w-100" href="/bilgi-al">Eğitim tarihlerinden haberdar olmak için</Button>
                    </div>
                </Col>

                {/* Tobeto ile yeni bir meslek Div */}
                <Col xs={12} lg={6} className="mt-8">
                    <div className="mw-lg text-center mx-auto border">
                        <h2 className="h3 mb-12 text-white">
                            Tobeto ile yeni bir meslek <span>&nbsp;edin, uzmanlaş ve yüksel.</span>
                        </h2>
                        <p className="text-white">
                            Bütçene ve zamanına en uygun abonelik paketini belirle, eğitim yolculuğunu başlat. Eğitim
                            yolcuğunu tamamladığında iş olanaklarıyla eşleş.
                        </p>
                        <Button className="btn btn-primary" href="/kayit-ol">Ücretsiz Üye Ol</Button>
                    </div>
                </Col>
            </Row>
        </Container></div>
    );
};

export default Frontend;
