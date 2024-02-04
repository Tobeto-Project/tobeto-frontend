import React from 'react';
import { Col, Row, Button } from 'react-bootstrap';
import { Link, Route, Routes, BrowserRouter as Router } from 'react-router-dom';

import Frontend from '../../../../Pages/Programs/Frontend';
import Backend from '../../../../Pages/Programs/Backend';
import CyberSecurity from '../../../../Pages/Programs/CyberSecurity';
import DataScience from '../../../../Pages/Programs/DataScience';
import FullStack from '../../../../Pages/Programs/FullStack';
import UI_UX from '../../../../Pages/Programs/UI_UX';
import Web_Mobile from '../../../../Pages/Programs/Web_Mobile';

const JobTable = () => {
    const data1 = [
        "Front End Developer",
        "Back End Developer",
        "Full Stack Developer",
        "Web & Mobile Developer",
        "Veri Bilimi Uzmanı",
        "Siber Güvenlik Uzmanı",
        "UI / UX Developer"
    ];

    // Sayfa component'ları
    const pageComponents = [Frontend, Backend, FullStack, Web_Mobile, DataScience, CyberSecurity, UI_UX];

    // Verileri iki gruba ayıralım
    const firstRowData = data1.slice(0, 4);
    const secondRowData = data1.slice(4);

    return (
        <div className="mx-5">
            {/* Üst kısım */}
            <Row className="custom-container" style={{ backgroundColor: "black", padding: "20px", margin: "auto" }}>
                <Col lg={11} className="d-flex justify-content-center align-items-center">
                    <div>
                        <h1 className="text-white mb-4">
                            <Link to="/" style={{ color: "white", textDecoration: "none" }}>
                                Dijital Bir Meslek İstiyorum
                            </Link>
                        </h1>
                    </div>
                </Col>
                <Col lg={1}>
                    <img src="https://tobeto.s3.cloud.ngn.com.tr/dot_gray_8a5a605556_eb3dd4f77d.svg" alt="Your Alt Text" style={{ width: "100px", height: "100px" }} />
                </Col>
            </Row>

            {/* İlk sıra */}
            <Row className="custom-container" style={{ backgroundColor: "black", padding: "20px", margin: "auto" }}>
                {firstRowData.map((item, index) => (
                    <Col key={index} lg={3} md={6} sm={12} xs={12} className="mb-3">
                        <div className="tabs-box position-relative d-flex align-items-center justify-content-center px-3 text-white" style={{ backgroundColor: "black", color: "#000", textDecoration: "none", width: "70%", height: "150px", borderRadius: "10px", border: "1px solid white" }}>
                            <Link to={`/${pageComponents[index].name}`} style={{ color: "white", textDecoration: "none" }}>
                                {item}
                            </Link>
                        </div>
                    </Col>
                ))}
            </Row>

            {/* İkinci sıra */}
            <Row className="custom-container" style={{ backgroundColor: "black", padding: "20px", margin: "auto" }}>
                {secondRowData.map((item, index) => (
                    <Col key={index} lg={3} md={6} sm={12} xs={12} className="mb-3">
                        <div className="tabs-box position-relative d-flex align-items-center justify-content-center px-3 text-white" style={{ backgroundColor: "black", color: "#000", textDecoration: "none", width: "70%", height: "150px", borderRadius: "10px", border: "1px solid white" }}>
                            <Link to={`/${pageComponents[index + 4].name}`} style={{ color: "white", textDecoration: "none" }}>
                                {item}
                            </Link>
                        </div>
                    </Col>
                ))}
            </Row>

            <Row className="m-auto text-center mt-5 mx-5">
                <Link to="/egitimler" className="d-block" style={{ color: "white", textDecoration: "none" }}>
                    Tümünü İncele &gt;
                </Link>
            </Row>

            <Row className="mx-5 px-5 m-auto mt-4">
                <Button to="/kayit-ol" as={Link} className="btn btn-rainbow py-4 px-3 rainbow-text mt-4">
                    Uzmanlaşmak istediğin alanı seç, Tobeto platformda öğrenmeye başla!
                </Button>
            </Row>
        </div>
    );
};

export default JobTable;
