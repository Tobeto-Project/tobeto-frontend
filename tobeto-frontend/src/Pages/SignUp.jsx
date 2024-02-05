// SignUp.js
import React from 'react';
import { Container, Row, Col, Image, Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import link2 from '../Assets/Images/istanbulkodluyor-black.svg';
import { register } from '../Services/RegisterService';
import { toast, ToastContainer } from 'react-toastify';
import RegistrationForm from '../Components/Common/RegistrationForm';
import Banner from '../Components/Layouts/Banner';
import Header from '../Components/Layouts/Header';
import Footer from '../Components/Layouts/Footer';

const SignUp = () => {
  const navigate = useNavigate();

  const handleSubmit = async (userData) => {
    try {
      await register(userData);
 
    } catch (error) {
   
      throw error;
    }
  };

  return (
    <div className="body-container">
     <Banner/>
     <Header/>

      <div className="main-content">
        <Container>
          <Row className="justify-content-md-center">
            <Col xs={12} md={6}>
              <RegistrationForm onSubmit={handleSubmit} />
            </Col>
            <Col xs={12} md={6}>
              <Card
                className="mt-4 border rounded-3 "
                style={{ padding: '8.7rem' }}
              >
                <Card.Body className="mt-5 mb-5">
                  <div className="d-flex flex-column justify-content-center align-items-center mb-5">
                    <Image
                      src={link2}
                      style={{
                        maxWidth: '100%',
                        minWidth: '160px',
                        width: '350px',
                      }}
                    />
                  </div>

                  <div className="d-flex flex-column justify-content-center align-items-center mb-5">
                    <Button
                      variant="primary"
                      type="submit"
                      className="btn-lg btn-info rounded-pill px-5 mb-5"
                      style={{ minWidth: '180px' }}
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

     <Footer/>
    </div>
  );
};

export default SignUp;
