import React from 'react'
import { Container, Form, Row, Col, Button } from "react-bootstrap";


const PlatformCompetencies = () => {
  return (
    <div>
      <Container>
        <Form>
          <Row className='mb-2'>
            <Col>
              <Form.Group controlId="formMyCompetencies">
                <Form.Label className='mb-0'>Yetkinlik</Form.Label>
                <Form.Select name='MyCompetencies' size="lg">
                  <option value="0">Yetkinlik Seçiniz</option>
                  <option value="1">C#</option>
                  <option value="2">SQL</option>
                  <option value="3">Aktif Öğrenme</option>
                  <option value="4">JavaScript</option>
                  <option value="5">Reklam</option>
                  <option value="6">Aktif Dinleme</option>
                  <option value="7">Algoritma</option>
                  <option value="8">Büyük veri</option>
                  <option value="9">Blockchain</option>
                  <option value="10">Backend</option>
                  <option value="11">Boostrap</option>
                  <option value="12">İletişim</option>
                  <option value="13">Pazarlama</option>
                  <option value="14">Marka Yönetimi</option>
                  <option value="15">E-Ticaret</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>
          <Button variant="primary" type="submit" className="mt-2">
            Kaydet
          </Button>
        </Form>
      </Container>
    </div>
  )
}

export default PlatformCompetencies