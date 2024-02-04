import React from 'react'
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import { TfiWorld } from "react-icons/tfi";


export const PlatformForeignLanguage = () => {
    return (
        <div>
            <Container>
                <Form>
                    <Row >
                        <Col>
                            <Form.Group controlId="formForignLanguage">
                                <Form.Label className='mb-0'>Yabancı Dil</Form.Label>
                                <Form.Select name='MyLanguage' size="lg">
                                    <option value="0">Dil Seçiniz</option>
                                    <option value="1">İngilizce</option>
                                    <option value="2">İspanyolca</option>
                                    <option value="3">Arapça</option>
                                    <option value="4">Rusça</option>
                                    <option value="5">Fransızca</option>
                                    <option value="6">Almanca</option>
                                    <option value="7">Çince</option>
                                    <option value="8">Arapça</option>
                                    <option value="9">İtalyanca</option>
                                    <option value="10">Hintçe</option>
                                    <option value="11">Japonca</option>
                                    <option value="12">İbranice</option>
                                    <option value="13">Yunanca</option>
                                    <option value="14">Türkçe</option>
                                    <option value="15">Urartuca</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="formLanguageLevel">
                                <Form.Label className='mb-0'>Yabancı Dil</Form.Label>
                                <Form.Select name='MyLanguageLevel' size="lg">
                                    <option value="0">Seviye Seçiniz</option>
                                    <option value="1">Temel Seviye(A1-A2)</option>
                                    <option value="2">Orta Seviye(B1-B2)</option>
                                    <option value="3">İleri Seviye(C1-C2)</option>
                                    <option value="4">Anadil</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Button variant="primary" type="submit" className="mt-2">
                        Kaydet
                    </Button>
                    <br /><br/>
                    {/* Yabancı Dillerin Geleceği Yer */}
                    <Row>
                        <Col md={4}>
                            <div>
                                <span className='delete-lang' style={{psition:'absolute',}}></span>
                            <div className="mylanguage w-100" style={{ padding: 5 }}>
                                <Row>
                                    <Col md={2}>
                                        <TfiWorld />
                                    </Col>
                                    <Col md={8}>
                                        <div className="d-flex flex-column">
                                            <span style={{ fontSize: "15px", color: "#828282" }}>Dil  </span>
                                            <span style={{ fontSize: "12px", color: "#828282CC" }}> Seviye </span>
                                        </div>
                                    </Col>
                                    <Col md={2}>
                                        <img src="https://tobeto.com/home.svg" />
                                    </Col>
                                </Row>
                                </div>
                            </div>
                        </Col>
                        <Col md={4}></Col>
                        <Col md={4}></Col>
                    </Row>
                </Form>
            </Container>
        </div>
    )
}
