import React from "react";
import "../../Styles/LayoutStyles/FooterStyle.css";
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faTwitter, faWhatsapp, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import logo from '../../Assets/Images/tobeto-black.png'

const Footer = () => {

  const buttonStyle = {
    width: '30px',
    height: '30px', 
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0.5rem', 
    fontSize: '1.2rem',
  };
  
 return (
  <>
          
    <footer className="text-white pb-4 border-top border-dark mt-5" style={{fontSize:"0.8rem",backgroundColor:"#181717"}}>

      <Container>
        <Row className="g-5 px-5 mt-5">
          <Col md={3}>
            <h5 className="fw-bold mb-3">Site Haritası</h5>
            <ul className="list-unstyled fw-lighter">
              <li className="mb-2">Hakkımızda</li>
              <li className="mb-2">Bireyler İçin</li>
              <li className="mb-2">Kurumlar İçin</li>
              <li className="mb-2">Kurumsal Kimlik</li>
              <li className="mb-2">S.S.S.</li>
              <li className="mb-2">İletişim</li>
            </ul>
          </Col>
          <Col md={3}>
            <h5 className="fw-bold  mb-3">Kaynaklar</h5>
            <ul className="list-unstyled fw-lighter">
              <li className="mb-2">Üyelik Sözleşmesi ve Kullanım Koşulları</li>
              <li className="mb-2">KVKK Aydınlatma Metni</li>
              <li className="mb-2">İlgili Kişi Başvuru Formu</li>
              <li className="mb-2">Çerez Politikası</li>
              <li className="mb-2">Çayma Formu</li>
            </ul>
          </Col>
          <Col md={3}>
            <h5 className="fw-bold  mb-3">Eğitim Yolculukları</h5>
            <ul className="list-unstyled fw-lighter">
              <li className="mb-2">Front End</li>
              <li className="mb-2">Full Stack</li>
              <li className="mb-2">Web & Mobile</li>
              <li className="mb-2">Veri Bilimi</li>
              <li className="mb-2">Siber Güvenlik</li>
              <li className="mb-2">UI / UX</li>
            </ul>
          </Col>
          <Col md={3}>
            <h5 className="fw-bold  mb-3">Blog</h5>
            <ul className="list-unstyled fw-lighter">
              <li className="mb-2">Web API Nedir? Programlama Yazılımının Arayüzü Nasıl Çalışır?</li>
              <li className="mb-2">Yapay Zeka Chatbot: İşte Geleceğin İletişim Aracı!</li>
              <li className="mb-2">Yazılım Test Otomasyonu: İş Akışınızı Daha Verimli Hale Getirin!</li>
              <li className="mb-2">Node.js Nedir ve Nasıl Kullanılır? İşte Sana Basit ve Etkili Kılavuz</li>
              <li className="mb-2">Robotlar ve Yapay Zeka için Hangi Yazılım Dili Kullanılır?</li>
            </ul>
          </Col>
        </Row>
        <hr className="my-4" style={{ borderColor: 'gray' }} />
        <Row className="align-items-center">
          <Col md={4} className="text-md-start text-center mb-3 mb-md-0">
            <img src={logo} alt="Your Logo" className="me-3" style={{width:"9rem"}} />
          </Col>
          <Col md={4} className="text-md-center">
            <span className="text-muted ">&copy; 2022 Tobeto | Her Hakkı Saklıdır</span>
          </Col>
          <Col md={4} className="d-flex justify-content-end py-2">
              <Button variant="primary" href="https://www.linkedin.com/company/tobeto?originalSubdomain=tr" className="rounded-circle text-white m-1" style={{ ...buttonStyle, backgroundColor: '#0e76a8' }}>
              <FontAwesomeIcon icon={faLinkedinIn} />
              </Button>
              <Button variant="info" href="https://twitter.com/tobeto_platform" className="rounded-circle text-white m-1" style={{ ...buttonStyle, backgroundColor: '#1DA1F2' }}>
              <FontAwesomeIcon icon={faTwitter} />
              </Button>
              <Button variant="success" href="#" className="rounded-circle text-white m-1" style={{ ...buttonStyle, backgroundColor: '#25D366' }}>
              <FontAwesomeIcon icon={faWhatsapp} />
              </Button>
              <Button variant="primary" href="https://www.facebook.com/tobetoplatform/?paipv=0&eav=AfZrRwQd-x4mEYXkaOlo6hvSIMRnti7sXNb9M2Tu5bHhZwzf8cHDk61NYh2ksK-4OyY&_rdr" className="rounded-circle text-white m-1" style={{ ...buttonStyle, backgroundColor: '#3b5998' }}>
              <FontAwesomeIcon icon={faFacebookF} />
              </Button>
          </Col>
        </Row>
      </Container>
    </footer>
    </>
  );
}

export default Footer;
