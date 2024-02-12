import React from 'react';
import { Col, Row } from 'react-bootstrap';

const SkillTable = () => {
    const data1 = [
        "Object Oriented Programming (OOP)",
        "Microsoft SQL Server Database",
        "HTML-CSS-SASS",
        "Javascript",
        "ASPNET Core MVC",
        "C# Programming",
        "Windows Form Application Programming",
        "ADONET",
        "DAPPER",
        "Git / Github",
        "ReactJS",
        "NextJS"
    ];

    return (
        <Row className="custom-container mx-5 py-1 shadow-5" style={{ backgroundColor: "#181717", padding: "80px", margin: "auto" }}>
            <Row className="custom-container mb-3" style={{ backgroundColor: "#181717", padding: "20px", margin: "auto" }}>
                <Col lg={11} className="d-flex justify-content-center align-items-center">
                    <div>
                        <h1 className="text-white mb-4">Bir Yerden Başlamak İstiyorum</h1>

                    </div>
                </Col>
                <Col lg={1} >
                    <img src="https://tobeto.s3.cloud.ngn.com.tr/dot_gray_8a5a605556_eb3dd4f77d.svg" alt="Your Alt Text" style={{ width: "100px", height: "100px" }} />
                </Col>
            </Row>

            {data1.map((item, index) => (
                <Col key={index} lg={3} md={6} sm={12} xs={12} className="mb-3 px-0">
                    <div className="tabs-box position-relative d-flex align-items-center justify-content-center px-3 text-white" style={{ backgroundColor: "#181717", color: "#000", textDecoration: "none", width: "70%", height: "100px", borderRadius: "10px", border: "1px solid white" }}>
                        {item}
                    </div>
                </Col>
            ))}
        </Row>

        
    );
};

export default SkillTable;
