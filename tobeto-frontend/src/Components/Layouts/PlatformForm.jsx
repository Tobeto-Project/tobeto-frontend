import React from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import { useSelector } from "react-redux";

const PlatformForm = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <div>
      <Container>
        <Form>
          {/* Profil Resmi */}
          <Form.Group>
            <div className="my-3 d-flex justify-content-center align-items-center">
              <img
                src={user.profilimg}
                alt="Profil Resmi"
                style={{ width: "300px", height: "300px", borderRadius: "50%" }} // Profil resmi için stil
              />
            </div>
          </Form.Group>

          {/* Ad ve Soyad */}
          <Row  className="mt-2">
            <Col>
              <Form.Group controlId="formFirstName">
                <Form.Label>Adınız</Form.Label>
                <Form.Control type="text" placeholder={user.name} />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="formLastName">
                <Form.Label>Soyad</Form.Label>
                <Form.Control type="text" placeholder={user.Lastname} />
              </Form.Group>
            </Col>
          </Row>

          {/* Telefon ve Doğum Tarihi */}
          <Row  className="mt-2">
            <Col>
              <Form.Group controlId="formPhone">
                <Form.Label>Telefon Numaranız</Form.Label>
                <Form.Control type="tel" placeholder={user.PhoneNumber} />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="formBirthDate">
                <Form.Label>Doğum Tarihi</Form.Label>
                <Form.Control type="date"/>
              </Form.Group>
            </Col>
          </Row>

          {/* TC Kimlik No ve E-posta */}
          <Row  className="mt-2">
            <Col>
              <Form.Group controlId="formTC">
                <Form.Label>TC Kimlik No</Form.Label>
                <Form.Control type="text" placeholder={user.IdentityNumber} />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="formEmail">
                <Form.Label>E-posta</Form.Label>
                <Form.Control type="email" placeholder={user.email} />
              </Form.Group>
            </Col>
          </Row>

          {/* Ülke */}
          <Form.Group controlId="formCountry">
            <Form.Label>Ülke</Form.Label>
            <Form.Control type="text" placeholder="Ülke" />
          </Form.Group>

          {/* İl ve İlçe */}
          <Row  className="mt-2">
            <Col>
              <Form.Group controlId="formCity">
                <Form.Label>İl</Form.Label>
                <Form.Control type="text" placeholder="İl" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="formDistrict">
                <Form.Label>İlçe</Form.Label>
                <Form.Control type="text" placeholder="İlçe" />
              </Form.Group>
            </Col>
          </Row>

          {/* Mahalle ve Sokak */}
          <Form.Group controlId="formAddress"  className="mt-2">
            <Form.Label>Mahalle ve Sokak</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Mahalle ve Sokak"
            />
          </Form.Group>

          {/* Hakkında */}
          <Form.Group controlId="formAbout" className="mt-2">
            <Form.Label>Hakkında</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder={user.AboutMe} />
          </Form.Group>

          {/* Kaydet Butonu */}
          <Button variant="primary" type="submit" className="mt-2">
            Kaydet
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default PlatformForm;
