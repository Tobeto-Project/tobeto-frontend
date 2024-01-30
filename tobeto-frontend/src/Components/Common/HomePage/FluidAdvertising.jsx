import React from 'react'
import { Container, Row, Col, Image } from "react-bootstrap";

function FluidAdvertising() {
    return (
        <div>

            <div className="container-fluid m-0 mp-0 section-three mt-5" style={{ backgroundColor: "#922CF7", paddingBottom: "120px" }}>
                <Container>
                    <Row className="position-relative">
                        <Col xs={12} md={6} className=" mx-auto text-center mt-5">
                            <p className="h6 text-white font-weight-bold">
                                Tobeto Platform'da ücretsiz olarak; sahip olduğun yetkinlikleri değerlendirir,
                                <br />
                                ilgi ve bilgi seviyene göre yüzlerce eğitim içeriğine ulaşırsın. Bunları nasıl tamamlayacağını
                                <br />
                                hızına, bütçene ve zamanına göre kendin belirlersin.
                                <br />
                                <br />
                                Hemen ücretsiz üye ol, platforma katıl!
                            </p>
                        </Col>

                        <Col xs={12} md={3} className="d-flex align-items-center justify-content-start" style={{ position: "absolute", bottom: "20px", left: "-40px", top: "-50px" }}>
                            <img
                                src="https://tobeto.s3.cloud.ngn.com.tr/04_b3b68891d7.svg?updated_at=2022-07-05T11:08:56.797Z"
                                alt=""
                                width="75"
                                height="75"
                            />
                        </Col>
                        <Col xs={12} md={3} className="d-flex align-items-center justify-content-end" style={{ position: "absolute", top: "20px", right: "-40px", top: "120px" }}>
                            <img
                                src="https://tobeto.s3.cloud.ngn.com.tr/dot_white_1e7b4378ec.svg?updated_at=2022-09-20T12:52:57.424Z"
                                alt=""
                                width="150"
                                height="150"
                            />
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default FluidAdvertising