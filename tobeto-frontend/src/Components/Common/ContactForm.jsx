import React from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import ReCAPTCHA from "react-google-recaptcha";

function ContactPage() {

  const handleRecaptchaChange = (value) => {
    console.log("reCAPTCHA value:", value);
  };


  return (
    <Container className="py-5">
      <Row className="g-4">
        <Col md={6} className="d-flex">
          <Card className="flex-fill shadow">
            <Card.Body>
              <Card.Title className='text-center my-4 border rounded-pill text-white' style={{backgroundColor:"#812CD9"}}>İletişim Bilgileri</Card.Title>
              <Card.Title className='text-center fw-bold fs-2 mb-5'>İletişim Bilgileri</Card.Title>
              <Card.Text>
                <p><strong>Firma Adı:</strong> TOBETO</p>
                <p><strong>Firma Unvan:</strong> Avez Elektronik İletişim Eğitim Danışmanlığı Ticaret Anonim Şirketi</p>
                <p><strong>Vergi Dairesi:</strong> Beykoz</p>
                <p><strong>Vergi No:</strong> 1050250859</p>
                <p><strong>Telefon:</strong> (0216) 331 48 00</p>
                <p><strong>E-Posta:</strong> info@tobeto.com</p>
                <p><strong>Adres:</strong> Kavacık, Rüzgarlıbahçe Mah. Çamçınar Sok. No:4 Smart Plaza B Blok Kat:3 34805, Beykoz/İstanbul</p>
                <p><strong>İstanbul Kolduyor için Telefon:</strong> (0216) 969 22 40</p>
                <p><strong>İstanbul Kolduyor için E-Posta:</strong> istanbulkolduyor@tobeto.com</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} className="d-flex">
          <Card className="flex-fill shadow">
            <Card.Body>
              <Card.Title className='text-center my-4 border rounded-pill text-white' style={{backgroundColor:"#812CD9"}}>Mesaj Bırakın</Card.Title>
              <Card.Title className='text-center fw-bold fs-2 mb-5'>İletişim Formu</Card.Title>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Control type="text" placeholder="Adınız Soyadınız" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control type="email" placeholder="E-Mail" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control as="textarea" rows={3} placeholder="Mesajınız" />
                </Form.Group>
                <div className="d-grid gap-2">
                <div>
            <ReCAPTCHA
              sitekey="6LeIknkpAAAAAPojboGDGIwsG3x38hJQt-5hrp8r"
              onChange={handleRecaptchaChange}
            />
          </div>
                  <Button variant="primary" type="submit">
                    Gönder
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default ContactPage;
