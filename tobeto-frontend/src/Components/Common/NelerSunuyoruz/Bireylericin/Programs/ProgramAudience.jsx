import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const ProgramAudience = () => {
    return (
        <Container className='mt-5 ' >
            <Row>
                <Col md={12} className="pt-8 pb-8 bg-dark-light">
                    <Container className='mt-3 '>
                        <Row>
                            <Col>
                                <h4 className="text-white fw-bold mb-5 ">Bu Eğitim Kimler İçindir?</h4>
                                <p className="text-white mb-8">
                                    Üniversite öğrencileri, profesyoneller, işini veya mesleğini değiştirmek ya da işinde gelişmek isteyen herkes katılabilir.

                                    Dünya çapında popülerliği ve iş olanakları artan yazılım geliştirme alanında kendini geliştirmek isteyen kişiler içindir.
                                </p>

                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
        </Container>
    );
};

export default ProgramAudience;
