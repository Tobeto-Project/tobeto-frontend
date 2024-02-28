import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import ReCAPTCHA from "react-google-recaptcha";
import { getContactInformation } from '../../Services/ContactService';

function ContactPage() {
  const [contactInfo, setContactInfo] = useState(null);

  const handleRecaptchaChange = (value) => {
    console.log("reCAPTCHA value:", value);
  };

  useEffect(() => {
    const fetchContactInfo = async () => {
      try {
        const data = await getContactInformation();
        if (data && data.items && data.items.length > 0) {
          setContactInfo(data.items[0]);
        }
      } catch (error) {
        console.error('Failed to fetch contact information:', error);
      }
    };

    fetchContactInfo();
  }, []);

  return (
    <Container>
      <Row className="g-4">
      <Col md={6} className="d-flex">
          <Card className="flex-fill shadow">
            <Card.Body>
              <Card.Title className='text-center my-4 border rounded-pill text-white' style={{backgroundColor:"#812CD9"}}>İletişim Bilgileri</Card.Title>
              <Card.Title className='text-center fw-bold fs-2 mb-5'>İletişim Bilgileri</Card.Title>
              <Card.Text>
              {contactInfo ? (
                <>
                  <p><strong>Firma Adı:</strong> {contactInfo.companyName}</p>
                  <p><strong>Firma Unvan:</strong> {contactInfo.companyTitle}</p>
                  <p><strong>Vergi Dairesi:</strong> {contactInfo.taxDepartment}</p>
                  <p><strong>Vergi No:</strong> {contactInfo.taxNumber}</p>
                  <p><strong>Telefon:</strong> {contactInfo.phone}</p>
                  <p><strong>E-Posta:</strong> {contactInfo.email.trim()}</p>
                  <p><strong>Adres:</strong> {contactInfo.address}</p>
                  <p><strong>İstanbul Kolduyor için Telefon:</strong> (0216) 969 22 40</p>
                <p><strong>İstanbul Kolduyor için E-Posta:</strong> istanbulkolduyor@tobeto.com</p>
                </>
              ) : (
                <p>Veri yükleniyor...</p>
              )}
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
