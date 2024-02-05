import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Header from '../../Components/Layouts/Header';
import Banner from '../../Components/Layouts/Banner';
import ProgramInfo from '../../Components/Common/NelerSunuyoruz/Bireylericin/Programs/ProgramInfo';
import ProgramContent from '../../Components/Common/NelerSunuyoruz/Bireylericin/Programs/ProgramContent';
import Footer from '../../Components/Layouts/Footer';
import ProgramAudience from '../../Components/Common/NelerSunuyoruz/Bireylericin/Programs/ProgramAudience';


const Frontend = () => {
    return (
        <div className="body-container pages-content">
            <Header />
            <Banner />
            <div className="position-relative main-content">
                <Container >
                    <Row className="align-items-center mt-5">
                        {/* Front-End Developer Div */}
                        <Col xs={12} lg={6} className="d-flex align-items-center justify-content-center h-100 ">
                            <div className="rounded bg-light text-center p-5">
                                <h3 className="text-dark">Front-End Developer</h3>
                                <Button className="btn btn-primary w-100" href="/bilgi-al">Eğitim tarihlerinden haberdar olmak için</Button>
                            </div>
                        </Col>

                        {/* Tobeto ile yeni bir meslek Div */}
                        <Col xs={12} lg={6} className="d-flex align-items-center justify-content-center ">
                            <div className="text-center">
                                <h2 className="text-white ">
                                    Tobeto ile yeni bir meslek <span>&nbsp;edin, uzmanlaş ve yüksel.</span>
                                </h2>
                                <p className="text-white pt-4 ">
                                    Bütçene ve zamanına en uygun abonelik paketini belirle, eğitim
                                    yolculuğunu başlat. Eğitim yolcuğunu tamamladığında iş olanaklarıyla eşleş.
                                </p>
                                <Button className="btn btn-primary my-0" href="/uyeol">Ücretsiz Üye Ol</Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <ProgramInfo />

                <ProgramContent />
                <ProgramAudience />
            </div>
            <Footer />
        </div>
    );
};

export default Frontend;
