// SignUp.js
import React, { useState } from 'react';
import { Container, Row, Col, Image, Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import link2 from '../Assets/Images/istanbulkodluyor-black.svg';
import { register } from '../Services/RegisterService';
import { toast, ToastContainer } from 'react-toastify';
import RegistrationForm from '../Components/Common/RegistrationForm';
import Banner from '../Components/Layouts/Banner';
import Header from '../Components/Layouts/Header';
import Footer from '../Components/Layouts/Footer';
import RegistrationModal from '../Components/Common/RegistrationModal';
import ChatBot from '../Components/Common/ChatBot';

const SignUp = () => {
  const navigate = useNavigate();





  const handleModalClose = () => {
   
    navigate.push("/registermodal");
  };

  const handleSubmit = async (userData) => {
    try {
      await register(userData);
 
    
     
    } catch (error) {
   
      // throw error;
    }
  };

  return (
    <div className="body-container">
     <Banner/>
     <Header/>
     <ChatBot/>
      <div className="main-content-2">
        <Container>
          <Row className="justify-content-md-center">
            <Col md={12} lg={6}>
              <RegistrationForm onSubmit={handleSubmit} />
            </Col>
            <Col md={12} lg={6}>
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
                   <>
                    <Button
                      variant="primary"
                      type="submit"
                      className="btn-lg btn-info rounded-pill px-5 mb-5"
                      style={{ minWidth: '180px' }}
                   onClick={() => toast.info("lütfen kayıt ol formunu doldurunuz")}
                
                    >
                      Kayıt Ol
                    </Button>
                    <RegistrationModal  />
                    </>
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
