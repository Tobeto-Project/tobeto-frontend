import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

function CodeAcademy() {
    return (
        <div>
            <Container className="mt-5 p-3 p-md-5" style={{ border: "3px solid #9833FF", borderRadius: "10px" }}>
                <Row className="d-md-flex align-items-center">
                    <Col md={3} className="mb-3 mb-md-0">
                        <img
                            src="https://tobeto.s3.cloud.ngn.com.tr/calogo_d676092a98.png?updated_at=2022-12-28T12:36:58.291Z"
                            alt="Codecademy Logo"
                            style={{ maxWidth: "172px" }}
                            className="ms-3 ms-md-5"
                        />
                    </Col>
                    <Col md={9}>
                        <span className="fs-2 fw-bold">
                            Dünyanın en büyük kodlama eğitimi platformu içerikleri şimdi Tobeto deneyimi ile!
                        </span>
                    </Col>
                </Row>
                <Row>
                    <Col md={12} className="mt-3">
                        <p className="fs-4">
                            Codecademy’nin tüm kaynaklarına Tobeto aboneliğinin sağlayacağı avantajlar, alanında uzman eğitmenlerle canlı
                            dersler ve mentörlerin desteği ile erişebilir, yeni kariyerine başlayabilirsin!
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default CodeAcademy;
