import React from 'react'
import { Container, Form, Row, Col, Button, Image } from "react-bootstrap";

const PlatformCertificates = () => {

    return (
        <div>
            <Container>
                <Form>
                    <Row>
                        <Col>
                            <Form.Group controlId="formFile" className="mb-3d-flex align-items-center">
                                <div> <Form.Label>Sertifikalarım</Form.Label></div>
                                <Image src="https://png.pngtree.com/element_our/png/20190103/vector-cloud-upload-icon-png_308699.jpg"
                                    style={{ x: 2, y: 2, width: 74, height: 74, rx: 37 }} roundedCircle />
                                <p className="mb-0 ml-2">Dosya Yükle</p>
                                <Form.Control type="file" />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Button variant="primary" type="submit">
                        Gönder
                    </Button>
                </Form>

            </Container>
        </div>
    )
}

export default PlatformCertificates