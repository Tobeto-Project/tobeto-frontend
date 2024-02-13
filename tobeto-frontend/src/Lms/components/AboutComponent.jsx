//AboutComponent.jsx

import React from "react";
import { Row, Col } from "react-bootstrap";
import { BsChevronRight, BsChevronDown } from "react-icons/bs";

const ActivityDetailInfo = () => {
    return (
        <div className="activity-detail-info">
            <div className="info-section">
                <Row>
                    <Col lg={2} md={2} sm={3} xs={5}>
                        <i className="sg-icon sg-oven"></i>
                        <strong>Başlangıç</strong>
                    </Col>
                    <Col lg={10} md={10} sm={9} xs={7}>
                        25 EKİ 2023 11:11
                    </Col>
                </Row>
                <Row>
                    <Col lg={2} md={2} sm={3} xs={5}>
                        <i className="hidden-icon sg-icon sg-oven"></i>
                        <strong>Bitiş</strong>
                    </Col>
                    <Col lg={10} md={10} sm={9} xs={7}>
                        <span>30 HAZ 2024 23:59</span>
                    </Col>
                </Row>
                <Row>
                    <Col lg={2} md={2} sm={3} xs={5}>
                        <i className="sg-icon sg-stopwatch"></i>
                        <strong>Tahmini Süre</strong>
                    </Col>
                    <Col lg={10} md={10} sm={9} xs={7}>
                        7 sa 48 dk
                    </Col>
                </Row>
                <Row>
                    <Col lg={2} md={2} sm={3} xs={7}>
                        <i className="sg-icon sg-tag"></i>
                        <strong>Eğitim Türü</strong>
                    </Col>
                    <Col lg={10} md={10} sm={9} xs={5}>
                        Eğitim
                    </Col>
                </Row>
                <Row>
                    <Col lg={2} md={2} sm={3} xs={5}>
                        <i className="sg-icon sg-file"></i>
                        <strong>Kategori</strong>
                    </Col>
                    <Col lg={10} md={10} sm={9} xs={7}>
                        <div>Genel</div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={2} md={2} sm={3} xs={7}>
                        <i className="sg-icon sg-file"></i>
                        <strong>İçerik</strong>
                    </Col>
                    <Col lg={10} md={10} sm={9} xs={5}>
                        64
                    </Col>
                </Row>
                <Row>
                    <Col lg={2} md={2} sm={3} xs={7}>
                        <i className="sg-icon sg-file"></i>
                        <span>Görev</span>
                    </Col>
                    <Col lg={10} md={10} sm={9} xs={5}>
                        5
                    </Col>
                </Row>
                <Row>
                    <Col lg={2} md={2} sm={3} xs={7}>
                        <i className="sg-icon sg-file"></i>
                        <span>Video</span>
                    </Col>
                    <Col lg={10} md={10} sm={9} xs={5}>
                        17
                    </Col>
                </Row>
                <Row>
                    <Col lg={2} md={2} sm={3} xs={7}>
                        <i className="sg-icon sg-file"></i>
                        <span>Podcast</span>
                    </Col>
                    <Col lg={10} md={10} sm={9} xs={5}>
                        37
                    </Col>
                </Row>
                <Row>
                    <Col lg={2} md={2} sm={3} xs={7}>
                        <i className="sg-icon sg-file"></i>
                        <span>E-Eğitim</span>
                    </Col>
                    <Col lg={10} md={10} sm={9} xs={5}>
                        5
                    </Col>
                </Row>
                <Row id="last-section">
                    <Col lg={2} md={2} sm={3} xs={5}>
                        <i className="sg-icon sg-briefcase"></i>
                        <strong>Üretici Firma</strong>
                    </Col>
                    <Col lg={10} md={10} sm={9} xs={7}>
                        <a className="btn-change">Enocta</a>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default ActivityDetailInfo;
