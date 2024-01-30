import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const SpiderInfoSection = () => {
    return (
        <Container className="py-5 mt-5" style={{ backgroundColor: "#2F2F2F", borderRadius: "15px" }}>

            <Row className="d-flex align-items-center">
                <Col lg={7} xs={12} className="order-lg-first order-last mb-3 mb-lg-0">
                    <div className="mw-xxl mx-auto">
                        <img
                            src="https://tobeto.s3.cloud.ngn.com.tr/spider_2_75142468a4.gif"
                            className="w-100"
                            alt="Spider Image"
                        />
                    </div>
                </Col>
                <Col lg={5} xs={12} className="order-lg-last order-first">
                    <div className="mw-lg mx-auto mobile-text-center">
                        <h4 className="text-white ml-3">Tobeto 'İşte Başarı Modeli'mizi Keşfet!</h4>
                        <p className="d-block text-white ml-3 mt-3">
                            Üyelerimize ücretsiz sunduğumuz, iş bulma ve işte başarılı olma sürecinde gerekli 80 tane
                            davranış ifadesinden oluşan Tobeto 'İşte Başarı Modeli' ile, profesyonellik yetkinliklerini ölç,
                            raporunu gör.
                        </p>
                        <a href="/kayit-ol" className="btn btn-secondary mt-3 mx-2">
                            Hemen Başla
                        </a>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default SpiderInfoSection;
