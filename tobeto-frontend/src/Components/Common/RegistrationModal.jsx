import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button, Form } from "react-bootstrap";
import ReCAPTCHA from "react-google-recaptcha";
import {  toast } from 'react-toastify';


const RegistrationModal = ({ show, handleClose }) => {
 
  const [agreementChecked, setAgreementChecked] = useState(false);
  const [communicationPermission, setCommunicationPermission] = useState(false);


  const handleAgreementChange = () => {
    setAgreementChecked(!agreementChecked);
  };

  const handleCommunicationPermissionChange = () => {
    setCommunicationPermission(!communicationPermission);
  };
 



  const handleFormSubmit = async () => {
    if (agreementChecked && communicationPermission) {
      try {
    

        toast.success("Kaydınız oluşturuldu.", {
          autoClose: 2500,

        });
        handleClose();

   
        
      } catch (error) {
        console.error("Error during registration:", error);
      }
    } else {
      console.log("Please complete all required actions");
    }
  };


  const handleRecaptchaChange = (value) => {
    console.log("reCAPTCHA value:", value);
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Kayıt Oluşturmak İçin Gerekli Sözleşmeler</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleFormSubmit}>
          <div>
            <Form.Group controlId="formAgreement">
              <p>Kişisel verileriniz <a target="_blank" href="https://tobeto.com/yasal-metinler/kvkk-aydinlatma-metni">Aydınlatma Metni</a> kapsamında işlenmektedir.</p>
              <Form.Check
                type="checkbox"
                checked={agreementChecked}
                onChange={handleAgreementChange}
              />
              <Form.Label>
                <a target="_blank" href="https://tobeto.com/yasal-metinler/acik-riza-metni">Açık Rıza Metni</a>’ni okudum ve anladım.
              </Form.Label>
            </Form.Group>
          </div>
          <div>
            <Form.Group controlId="formTerms">
              <Form.Check
                type="checkbox"
              />
              <Form.Label>
                <a target="_blank" href="https://tobeto.com/yasal-metinler/tobeto-uyelik-sozlesmesi">Üyelik Sözleşmesi ve Kullanım Koşulları</a>’nı okudum ve anladım.*
              </Form.Label>
            </Form.Group>
          </div>
          <div>
            <p> İletişim bilgilerim üzerinden pazarlama ve tanıtım amaçlı irtibata geçilmesini kabul ediyorum.</p>
          </div>
          <div>
            <Form.Group controlId="formCommunicationPermission">
              <Form.Check
                type="checkbox"
                label="E-posta Gönderim İzni*"
                checked={communicationPermission}
                onChange={handleCommunicationPermissionChange}
              />
            </Form.Group>
          </div>
          <div>
            <Form.Group controlId="formCommunicationPermission">
              <Form.Check
                type="checkbox"
                label="Arama izni*"
                checked={communicationPermission}
                onChange={handleCommunicationPermissionChange}
              />
            </Form.Group>
          </div>
          <div>
            <ReCAPTCHA
              sitekey="6LeIknkpAAAAAPojboGDGIwsG3x38hJQt-5hrp8r"
              onChange={handleRecaptchaChange}
            />
          </div>
          <Button href="/girisyap"  variant="primary" type="submit" disabled={!agreementChecked} onClick={handleFormSubmit}>
            Devam Et
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default RegistrationModal;
