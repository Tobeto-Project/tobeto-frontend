import React from 'react'
import { Container, Row, Col, Image, Button } from 'react-bootstrap'
import { Link } from "react-router-dom";
import link4 from "../../../../../src/Assets/Images/istanbulkodluyor-logo-white.svg";
import link2 from "../../../../../src/Assets/Images/anasayfa-right.svg";

function CardImage() {
    return (
        <Container className='mt-5 mb-5'>
            <Row>
                <Col md={7} className="image-container mx-auto">
                    <Image src={link2} fluid className="rounded" />
                    <div className="overlay2">
                        <div className="overlay2-box"></div>
                        <p className="fw-bold">
                            Aradığın <span style={{ color: "#00B078" }}>"</span> İş{" "}
                            <span style={{ color: "#00B078" }}>"</span> Burada!
                        </p>
                        <img className="me-4" src={link4} alt="Ek Görsel" />
                        <Link to={"/IstanbulKodluyor"}>
                            <Button className="p-1 overlay-button" style={{ margin: "0" }}>
                                Başvur
                            </Button>
                        </Link>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default CardImage