// ApplicationStatusCard.jsx

import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import "../../Styles/CommonStyles/ApplicationStatusCard.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const ApplicationStatusCard = () => {
    return (
        <Card className="mt-2 shadow-0">
            <Card.Body className="p-1 shadow-5 application" >
                <Row className="header-info ">
                    <Col md={6}>
                        <div>
                            <span className="form-name">İstanbul Kodluyor </span>
                            <span className="form-name">Bilgilendirme</span>
                        </div>
                    </Col>
                    <Col md={4} >
                        <div className="form-status pt-1 ps-2">Kabul Edildi</div>
                    </Col>
                </Row>
                <Row className="align-items-center">
                    <Col md={1}>
                        <FontAwesomeIcon className="status-icon" icon={faCheck} style={{ color: "green", marginRight: "5px" }} />
                    </Col>
                    <Col md={11}>
                        <div className="form-info">
                            <span className="form-date text-muted" >İstanbul Kodluyor Başvuru Formu onaylandı.</span>
                        </div>
                    </Col>
                </Row>
                <Row className="align-items-center">
                    <Col md={1}>
                        <FontAwesomeIcon className="status-icon" icon={faCheck} style={{ color: "green", marginRight: "5px" }} />
                    </Col>
                    <Col md={11}>
                        <div className="form-info">
                            <span className="form-date text-muted">İstanbul Kodluyor Belge Yükleme Formu onaylandı.</span>
                        </div>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
};

export default ApplicationStatusCard;

