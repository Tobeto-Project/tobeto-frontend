import React from 'react'
import { Container, Form, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";

const PlatformEducationLife = () => {
    const userDetails = useSelector(state => state.auth.userDetails);

    return (
        <div>
            <Container>
                <Form>
                    <Row className="mt-2" style={{ marginBottom: '24px', paddingEnd: '12px' }}>
                        <Col>
                            <Form.Group controlId="formEducationStatus">
                                <Form.Label className='mb-0'>Eğitim Durumu*</Form.Label>
                                <Form.Select name='EducationStatus' required>
                                    <option value="0">Seviye Seçiniz</option>
                                    <option value="1">Lisans</option>
                                    <option value="2">Önlisans</option>
                                    <option value="3">Yüksek Lisans</option>
                                    <option value="4">Doktora</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="formUniversity">
                                <Form.Label className='mb-0'>Üniversite*</Form.Label>
                                <Form.Control type="text" placeholder={userDetails} required />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="mt-2" style={{ marginBottom: '24px', paddingEnd: '12px' }}>
                        <Col>
                            <Form.Group controlId="formDepartment">
                                <Form.Label>Bölüm*</Form.Label>
                                <Form.Control type="text" placeholder={userDetails} />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="formStartYear">
                                <Form.Label>Başlangıç Yılı*</Form.Label>
                                <Form.Control type="calendar" placeholder={userDetails} />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row style={{ marginBottom: '24px', paddingEnd: '12px' }}>
                        <Col>
                            <Form.Group controlId="formGraduate">
                                <Form.Label>Mezuniyet Yılı*</Form.Label>
                                <Form.Control type="gg.aa.yy" placeholder={userDetails} required />
                                <label className='mt-2' for="checkbox" style={{ font: '14px' }}>
                                    <input className="me-2" name="checkbox" type="checkbox"></input>
                                    Devam ediyorum.
                                </label>
                            </Form.Group>
                        </Col>
                        <Col></Col>
                    </Row>
                </Form>
            </Container>
        </div>
    )
}

export default PlatformEducationLife