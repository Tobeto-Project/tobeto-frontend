import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const ProgramList = () => {
    const programs = [
        { title: "Ürün Yönetimi Programı" },
        { title: "Dijital Pazarlama Programı" },
        { title: "Proje Yönetimi Programı" },
        { title: "Yetenek Yönetimi Programı" },
    ];

    return (
        <>
            <Container className="mw-5xl mx-auto text-center position-relative mobile-header mb-4">
                <Row>
                    <Col lg={2} className="text-left">
                        <div className="vector6">
                            <img src="https://tobeto.s3.cloud.ngn.com.tr/comingsoon_4e9690b5a9_84706ccf9b.svg" alt="" width="130" />
                        </div>
                    </Col>
                    <Col lg={8} className="text-center">
                        <h1 className="text-white mb-20 tablet-75 mx-auto position-relative">
                            Profesyonel Bir Yönetici Olmak İstiyorum
                        </h1>
                    </Col>
                    <Col lg={2} className="text-right">
                        <div className="vector6">
                            <img src="https://tobeto.s3.cloud.ngn.com.tr/04_b3b68891d7_5ad2591676.svg" alt="" width="150" height="150" />
                        </div>
                    </Col>
                </Row>
            </Container>

            <Container>
                <Row>
                    {programs.map((program, index) => (
                        <Col key={index} lg={3} md={6} sm={12} xs={12} className="mb-3">
                            <div className="pack-box text-center p-4 " style={{ border: '1px solid white', borderRadius: '30px', height: '100%' }}>
                                <a href="/bilgi-al">
                                    <h5 className="text-white">{program.title}</h5>
                                </a>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>


        </>
    );
};

export default ProgramList;
