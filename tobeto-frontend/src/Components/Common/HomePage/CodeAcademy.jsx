import React from 'react'
import { Container, Row, Col, Image } from "react-bootstrap";

function CodeAcademy() {
  return (
 

      <div>
          <Container className="mt-5" style={{ width: "1000px", height: "400px", border: "2px solid purple", padding: "20px" }}>
              <Row className="d-flex" >
                  <Col style={{ width: "170px !important" }}>
                      <img
                          src="https://tobeto.s3.cloud.ngn.com.tr/calogo_d676092a98.png?updated_at=2022-12-28T12:36:58.291Z"
                          style={{ maxWidth: "172px", height: "auto" }}
                      />
                  </Col>
                  <Col>
                      <span style={{ fontWeight: "bold", fontSize: "25px" }}>
                          Dünyanın en büyük kodlama eğitimi platformu içerikleri şimdi Tobeto deneyimi ile!
                      </span>
                  </Col>
              </Row>
              <p style={{ fontWeight: "bold" }}>
                  Codecademy’nin tüm kaynaklarına Tobeto aboneliğinin sağlayacağı avantajlar, alanında uzman eğitmenlerle canlı
                  dersler ve mentörlerin desteği ile erişebilir, yeni kariyerine başlayabilirsin!
              </p>
          </Container>
      </div>
      
  )
}

export default CodeAcademy