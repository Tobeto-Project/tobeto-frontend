import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
import logo from '../../Assets/Images/tobeto-white-logo.png'
const PlatformFooter = () => {
  return (
    <div className="footer-main">
      <footer style={{ backgroundColor: '#9933FC', color: 'white' }}>
        <Container className='py-3'>
          <Row className='my-5 py-5 justify-content-between align-items-center'>
            <Col xs={12} md={4} className="footer-section">
              <img src={logo} alt="Logo" style={{ width: '100px' }} />
            </Col>
            <Col xs={12} md={4} className="footer-section text-center">
              © 2022 Tobeto
            </Col>
            <Col xs={12} md={4} className="footer-section text-md-end">
              <Button variant="light">Bize Ulaşın</Button>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  )
}

export default PlatformFooter