import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

function New() {
    return (
        <div style={{ padding: '30px', width: '80%', margin: '0 auto' }}>

            <Container style={{ borderRadius: '10px !important' }}>
                <Row  className="bg-dark py-3">
                    <Col md={{ span: 10, offset: 1 }}>
                        <h1
                            className="ch-text text-center"
                            style={{ color: 'white', fontSize: '1.7em', }}
                        >
                            Tobeto; yetenekleri yakalar, değerlendirir, geliştirir, destekler,
                            eğitir, istihdam eder, ekosisteme dahil eder.
                        </h1>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default New