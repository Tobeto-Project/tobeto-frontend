// CompanyList.js

import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const companies = [
    {
        name: "Enocta",
        logo: "https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fenocta.9d43f28e.png&w=96&q=75",
        link: "https://www.enocta.com/",
    },
    {
        name: "Codecademy",
        logo: "https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcodecademy.1a1f5478.png&w=1080&q=75",
        link: "https://www.codecademy.com/",
    },
    {
        name: "Perculus",
        logo: "https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fperculus.8d1bf42c.png&w=256&q=75",
        link: "https://perculus.com/tr",
    },
    {
        name: "Kampus365",
        logo: "https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fkampus365.801c721d.png&w=256&q=75",
        link: "https://www.advancity.com.tr/",
    },
    {
        name: "Huawei",
        logo: "https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhuawei.0004b5e6.png&w=256&q=75",
        link: "https://www.talent-interview.com/tr/",
    },
    {
        name: "Talent Interview",
        logo: "https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftalent-interview_logo_disi.dfda1758.png&w=1080&q=75",
        link: "https://www.talent-interview.com/tr/",
    },
];

const CompanyList = () => {
    return (
        <Container className="py-5 mx-6">
            <Row >
                {companies.map((company, index) => (
                    <Col key={index} lg={2} md={4} sm={6} xs={12}
                        className={`mb-4  text-center ${company.name === "Codecademy" ? "mt-2" : ""} `}
                       
                    >
                        <a href={company.link} target="_blank" rel="noopener noreferrer">
                            <img src={company.logo} alt={company.name} className="img-fluid" />
                        </a>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default CompanyList;
