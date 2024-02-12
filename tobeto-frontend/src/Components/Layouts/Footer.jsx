import React from "react";
import "../../Styles/LayoutStyles/FooterStyle.css";
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import logo from '../../Assets/Images/tobeto-black.png'

const Footer = () => {
 return (
    <footer className="text-white pt-4 pb-4" style={{fontSize:"0.8rem"}}>
              <hr className="my-4 mb-5" style={{ borderColor: 'gray' }} />

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
            <img src={logo} alt="Your Logo" className="me-3" style={{width:"8rem"}} />
          </Col>
          <Col md={4} className="text-md-center">
            <span className="text-muted ">&copy; 2022 Tobeto | Her Hakkı Saklıdır</span>
          </Col>
          <Col md={4} className="text-md-end text-center">
            <a href="https://www.facebook.com/tobetoplatform" className="text-muted me-2"><FontAwesomeIcon icon={faFacebookF} /></a>
            <a href="https://www.instagram.com/tobeto_official/?img_index=1" className="text-muted me-2"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="https://twitter.com/tobeto_platform" className="text-muted me-2"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="https://www.linkedin.com/company/tobeto/?originalSubdomain=tr" className="text-muted"><FontAwesomeIcon icon={faLinkedinIn} /></a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
