import React from "react";
import Banner from "../Components/Layouts/Banner";
import Header from "../Components/Layouts/Header";
import Footer from "../Components/Layouts/Footer";
import {
  Container,
  Form,
  Button,
  Row,
  Col,
  Image,
  Card,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import link from "../Assets/Images/tobeto-black.png";
import link2 from "../Assets/Images/istanbulkodluyor-black.svg";

const SignUp = () => {
  return (
    <div className="body-container">
      <Banner />
      <Header />

      <div className="main-content">
        <Container>
          <Row className="justify-content-md-center">
            <Col xs={12} md={6}>
              <Form className="border rounded-3 my-4 mb-5 p-5">
                <div className="text-center mt-2 mb-5">
                  <Image className="my-2" src={link} fluid />
                </div>
                <div className="text-center my-5 fs-1 fw-bold text-dark">
                  Hemen Kayıt ol
                </div>

                <Form.Group className="mb-4 mx-5" controlId="formBasicName">
                  <Form.Control type="text" placeholder="Ad*" />
                </Form.Group>

                <Form.Group className="mb-4 mx-5" controlId="formBasicLastname">
                  <Form.Control type="text" placeholder="Soyad*" />
                </Form.Group>

                <Form.Group className="mb-4 mx-5" controlId="formBasicEmail">
                  <Form.Control
                    type="email"
                    placeholder="E-posta adresinizi girin*"
                  />
                </Form.Group>

                <Form.Group className="mb-4 mx-5" controlId="formBasicPassword">
                  <Form.Control
                    type="password"
                    placeholder="Parolanızı girin*"
                  />
                </Form.Group>

                <Form.Group
                  className="mb-4 mx-5"
                  controlId="formAgainBasicPassword"
                >
                  <Form.Control
                    type="password"
                    placeholder="Tekrar Parolanızı girin*"
                  />
                </Form.Group>

                <div className="text-center">
                  <Button
                    variant="primary"
                    type="submit"
                    className="btn-success rounded-pill px-5 btn-lg"
                  >
                    Kayıt Ol
                  </Button>
                </div>

                <div className="text-center mt-3">
                  <Link to="/girisyap">
                    Zaten bir hesabın var mı? Giriş Yap
                  </Link>
                </div>
              </Form>
            </Col>
            <Col xs={12} md={6}>
              <Card
                className="mt-4 border rounded-3  "
                style={{ padding: "8.7rem" }}
              >
                <Card.Body className="mt-5 mb-5">
                  <div className="d-flex flex-column justify-content-center align-items-center mb-5">
                    <Image
                      src={link2}
                      style={{
                        maxWidth: "100%",
                        minWidth: "160px",
                        width: "350px",
                      }}
                    />
                  </div>

                  <div className="d-flex flex-column justify-content-center align-items-center mb-5">
                    <Button
                      variant="primary"
                      type="submit"
                      className="btn-lg btn-info rounded-pill px-5 mb-5"
                      style={{ minWidth: "180px" }}
                    >
                      Kayıt Ol
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

      <Footer />
    </div>
  );
};

export default SignUp;
