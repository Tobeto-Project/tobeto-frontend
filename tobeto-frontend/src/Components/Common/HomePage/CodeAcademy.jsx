import React from 'react'
import { Container, Row, Col, Image } from "react-bootstrap";

function CodeAcademy() {
  return (
 

      <div>
          <Container className="mt-5 p-5" style={{ width: "62.5rem", height: "400px", border: "3px solid #9833FF", padding: "20px",borderRadius:"10px" }}>
              <Row className="d-flex" >
                  <Col md={3} className='p-0'>
                      <img
                          src="https://tobeto.s3.cloud.ngn.com.tr/calogo_d676092a98.png?updated_at=2022-12-28T12:36:58.291Z"
                          style={{ maxWidth: "172px"}} className='ms-5'
                      />
                  </Col>
                  <Col md={9}>
                      <span className='fs-2 fw-bold'>
                          Dünyanın en büyük kodlama eğitimi platformu içerikleri şimdi Tobeto deneyimi ile!
                      </span>
                  </Col>
              </Row>
              <Row>
                <Col md={12} className='ms-auto me-2 px-5'>
                 <p className='fs-4 mt-4'>
                  Codecademy’nin tüm kaynaklarına Tobeto aboneliğinin sağlayacağı avantajlar, alanında uzman eğitmenlerle canlı
                  dersler ve mentörlerin desteği ile erişebilir, yeni kariyerine başlayabilirsin!
                 </p>
                </Col>
               
              </Row>
              
          </Container>
      </div>
      
  )
}

export default CodeAcademy