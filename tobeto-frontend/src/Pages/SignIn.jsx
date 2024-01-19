import React, { useState } from "react";
import Banner from "../Components/Layouts/Banner";
import Header from "../Components/Layouts/Header";
import Footer from "../Components/Layouts/Footer";
import {Container,Form,Button,Row,Col,Image,Card,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import link from "../Assets/Images/tobeto-black.png";
import link2 from "../Assets/Images/istanbulkodluyor-black.svg";
import { validateUser } from "../Services/AuthService";
import { useDispatch } from "react-redux";
import { loginFailure, loginRequest, loginSuccess } from "../Store/Actions/authActions";



const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    dispatch(loginRequest());
    
    if (!email || !password) {
      dispatch(loginFailure("E-posta ve şifre boş bırakılamaz!"));
      return;
    }
    try{
      const result = await validateUser(email, password);
      if (result) {
        dispatch(loginSuccess(result.user));
        navigate('/platform')
      } else {
        dispatch(loginFailure("Yanlış e-posta veya şifre!"));
      }
    } catch(error){
      dispatch(loginFailure("Login işlemi sırasında bir hata oluştu!"));
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
              <Form className="border rounded-3 my-4 mb-5 p-5">
                <div className="text-center mt-2 mb-5">
                  <Image className="my-2" src={link} fluid />
                </div>

                <Form.Group className="mb-4 mx-5" controlId="formBasicEmail">
                  <Form.Control
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="E-posta adresinizi girin"
                  />
                </Form.Group>

                <Form.Group className="mb-4 mx-5" controlId="formBasicPassword">
                  <Form.Control
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Parolanızı girin"
                  />
                </Form.Group>
                <div className="text-center">
                  <Button
                    variant="primary"
                    type="submit"
                    className="btn-success rounded-pill px-5 btn-lg"
                    onClick={handleLogin}
                  >
                    Giriş Yap
                  </Button>
                </div>
                <div className="text-center mt-4 mb-5">
                  <Link className="text-dark">Şifremi Unuttum</Link>
                </div>

                <div className="text-center mt-3">
                  <Link to="/uyeol">Henüz üye değil misin? Kayıt Ol</Link>
                </div>
              </Form>
            </Col>
            <Col xs={12} md={6}>
              <Card className="mt-4 border rounded-3">
                <Card.Body className="mt-5 mb-5">
                  <div className="text-center mt-3 mb-5">
                    <Image src={link2} style={{ width: "280px" }} />
                  </div>

                  <div
                    className="mb-5"
                    style={{
                      border: "solid 1px",
                      color: "green",
                      height: "0.1em",
                      width: "15em",
                      margin: "auto",
                    }}
                  ></div>
                  <Card.Title className="text-center my-5 fs-1 fw-bold">
                    Aradığın "iş" burada!
                  </Card.Title>
                  <div className="text-center">
                    <Link to='/uyeol'><Button
                      variant="primary"
                      type="submit"
                      className="btn-lg btn-info rounded-pill px-5"
                    >
                      Kayıt Ol
                    </Button></Link>
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
export default SignIn;
