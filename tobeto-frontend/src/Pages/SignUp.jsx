import React, { useState } from "react";
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
import { Link, useNavigate } from "react-router-dom";
import link from "../Assets/Images/tobeto-black.png";
import link2 from "../Assets/Images/istanbulkodluyor-black.svg";
import { register } from '../Services/RegisterService';
import { toast, ToastContainer } from 'react-toastify';

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!firstName || !lastName || !email || !phoneNumber || !password || !confirmPassword) {
      toast.error("Lütfen tüm alanları doldurunuz!"); 
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Parolalar eşleşmiyor!");
      alert("Parolalar eşleşmiyor!");
      return;
    }

    try {
      const userData = {
          firstName,
          lastName,
          email,
          password,
          phoneNumber
      };
      await register(userData);
      toast.success("Kaydınız oluşturuldu.", {
        autoClose: 200,
        onClose: () => navigate('/girisyap') // Toast kapanınca yönlendirme yap
      });
      } catch (error) {
      toast.error('Kayıt sırasında hata oluştu');
    }
  };

  return (
    <div className="body-container">
      <Banner />
      <Header />

      <div className="main-content">
        <Container>
          <Row className="justify-content-md-center">
            <Col xs={12} md={6}>
              <Form
                className="my-4 mb-5 p-5 btn-rainbow-card"
                onSubmit={handleSubmit}
              
              >
                <div className="text-center mt-1 mb-4">
                  <Image className="my-2" src={link} fluid />
                </div>
                <div className="text-center my-4 fs-1 fw-bold text-dark">
                  Hemen Kayıt ol
                </div>

                <Form.Group className="mb-4 mx-5" controlId="formBasicName">
                  <Form.Control
                    type="text"
                    placeholder="Ad*"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-4 mx-5" controlId="formBasicLastname">
                  <Form.Control
                    type="text"
                    placeholder="Soyad*"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-4 mx-5" controlId="formPhoneNumber">
                  <Form.Control
                    type="tel"
                    placeholder="Telefon numaranızı girin*"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-4 mx-5" controlId="formBasicEmail">
                  <Form.Control
                    type="email"
                    placeholder="E-posta adresinizi girin*"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-4 mx-5" controlId="formBasicPassword">
                  <Form.Control
                    type="password"
                    placeholder="Parolanızı girin*"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>

                <Form.Group
                  className="mb-4 mx-5"
                  controlId="formAgainBasicPassword"
                >
                  <Form.Control
                    type="password"
                    placeholder="Tekrar Parolanızı girin*"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
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
                className="mt-4 border rounded-3 "
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
                    <ToastContainer position="bottom-right" autoClose={2000} />
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
