import React from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import userphoto from "../../Assets/Images/user-photo.png"


const PlatformForm = () => {
  const userDetails = useSelector(state => state.auth.userDetails);

  return (
    <div>
      <Container>
        <Form>
          <Form.Group>
            <div className="my-3 d-flex justify-content-center align-items-center">
              <img
                src={userphoto}
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
                <Form.Control type="text" placeholder={userDetails.firstName} />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="formLastName">
                <Form.Label>Soyad</Form.Label>
                <Form.Control type="text" placeholder={userDetails.lastname} />
              </Form.Group>
            </Col>
          </Row>

          {/* Telefon ve Doğum Tarihi */}
          <Row  className="mt-2">
            <Col>
              <Form.Group controlId="formPhone">
                <Form.Label>Telefon Numaranız</Form.Label>
                <Form.Control type="tel" placeholder={userDetails.phoneNumber}/>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="formBirthDate">
                <Form.Label>Doğum Tarihi</Form.Label>
                <Form.Control type="date" placeholder={userDetails.birthDate}/>
              </Form.Group>
            </Col>
          </Row>

          {/* TC Kimlik No ve E-posta */}
          <Row  className="mt-2">
            <Col>
              <Form.Group controlId="formTC">
                <Form.Label>TC Kimlik No</Form.Label>
                <Form.Control type="text" placeholder={userDetails.identityNumber}/>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="formEmail">
                <Form.Label>E-posta</Form.Label>
                <Form.Control type="email" placeholder={userDetails.email} />
              </Form.Group>
            </Col>
          </Row>

          {/* Ülke */}
          <Form.Group controlId="formCountry">
            <Form.Label>Ülke</Form.Label>
            <Form.Control type="text" placeholder={userDetails.countryName} />
          </Form.Group>

          {/* İl ve İlçe */}
          <Row  className="mt-2">
            <Col>
              <Form.Group controlId="formCity">
                <Form.Label>İl</Form.Label>
                <Form.Control type="text" placeholder={userDetails.cityName} />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="formDistrict">
                <Form.Label>İlçe</Form.Label>
                <Form.Control type="text" placeholder={userDetails.townName} />
              </Form.Group>
            </Col>
          </Row>

          {/* Mahalle ve Sokak */}
          <Form.Group controlId="formAddress"  className="mt-2">
            <Form.Label>Mahalle ve Sokak</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder={userDetails.aboutMe}
            />
          </Form.Group>

          {/* Hakkında */}
          <Form.Group controlId="formAbout" className="mt-2">
            <Form.Label>Hakkında</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder={userDetails.description} />
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
