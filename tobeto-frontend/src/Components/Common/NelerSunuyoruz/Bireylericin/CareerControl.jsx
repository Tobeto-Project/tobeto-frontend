import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const CareerControl = () => {
    return (
        <Container className="text-center">

            <Row className="mb-5">
                <Col md={6} className='mt-5'>
                    <div className="mx-auto position-relative">
                        <h1 className="text-white" style={{ fontSize: '2em', maxWidth: '100%' }}>
                            Kariyerinin kontrolü
                        </h1>
                        <h1 className="text-white mb-5" style={{ fontSize: '2em', maxWidth: '100%' }}>
                            senin elinde
                        </h1>
                    </div>
                </Col>

                <Col md={4} className="mb-2 mt-5">
                    <img
                        src="https://tobeto.s3.cloud.ngn.com.tr/03_005013e668_71411c39a1.svg"
                        alt=""
                        width="100"
                        height="100"
                    />
                </Col>
            </Row>

            <Row md={10} className="mb-5">
                <Col md={12}>
                    <div className="mw-5xl mx-auto position-relative border border-purple p-2 p-md-4 rounded">
                        <p className="text-white lh-md borderp">
                            <a className="text-white" href="#dijital-bir-meslek">
                                Dijital Bir Meslek
                            </a>{' '}
                            edinmek,{' '}
                            <a className="text-white" href="#profesyonel-bir-yonetici">
                                Profesyonel Bir Yönetici
                            </a>{' '}
                            olmak ya da{' '}
                            <a className="text-white" href="#kendini-gelistirmek">
                                Kendini Geliştirmek
                            </a>{' '}
                            için İstediğin bölümden, istediğin kadar eğitimi seçip, eş zamanlı olarak alabilirsin.
                        </p>
                    </div>
                </Col>
            </Row>

            <Row className="mb-5">
                <Col md={12}>
                    <div className="mw-5xl mx-auto position-relative">
                        <p className="text-white my-8">
                            <a href="http://www.codecademy" className="text-white">
                                Codecademy
                            </a>{' '}
                            iş birliği ile, fark yaratmak senin elinde!
                        </p>
                    </div>
                </Col>
            </Row>

            <Row className='px-1'>
                <Button href="/girisyap" className="btn btn-rainbow py-4 rainbow-text">
                    Uzmanlaşmak istediğin alanı seç, Tobeto platformda öğrenmeye başla!
                </Button>
            </Row>

        </Container>
    );
};

export default CareerControl;
