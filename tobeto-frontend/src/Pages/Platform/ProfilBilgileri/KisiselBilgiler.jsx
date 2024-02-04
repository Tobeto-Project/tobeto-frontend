import React, { useState } from 'react';
import { Container, Row, Col, Nav, Card } from 'react-bootstrap';
import PlatformHeader from '../../../Components/Layouts/PlatformHeader';
import PlatformForm from '../../../Components/Layouts/PlatformForm';
import PlatformExperiences from '../../../Components/Layouts/PlatformExperiences';
import PlatformEducationLife from '../../../Components/Layouts/PlatformEducationLife';
import Competencies from '../../../Components/Layouts/PlatformCompetencies';
import PlatformCertificates from '../../../Components/Layouts/PlatformCertificates';
import PlatformMediaAccounts from '../../../Components/Layouts/PlatformMediaAccounts';
import { PlatformForeignLanguage } from '../../../Components/Layouts/PlatformForeignLanguage';
import PlatformSettings from '../../../Components/Layouts/PlatformSettings';

function PlatformKisiselMenu() {
  const [activeTab, setActiveTab] = useState("kisiselbilgilerim");


  const renderContent = () => {
    switch (activeTab) {
      case "kisiselbilgilerim":
        return <Card.Body><PlatformForm/></Card.Body>;
      case "deneyimlerim":
        return <Card.Body><PlatformExperiences/></Card.Body>;
      case "egitimhayatim":
        return <Card.Body><PlatformEducationLife/></Card.Body>;
      case "yetkinliklerim":
        return <Card.Body><Competencies/></Card.Body>;
      case "sertifikalarım":
        return <Card.Body><PlatformCertificates/></Card.Body>;
      case "medya":
        return <Card.Body><PlatformMediaAccounts/></Card.Body>;
      case "yabancı dillerim":
        return <Card.Body><PlatformForeignLanguage/></Card.Body>;
      case "ayarlar":
        return <Card.Body><PlatformSettings/></Card.Body>;
      default:
        return <Card.Body>İçerik bulunamadı.</Card.Body>;
    }
  };

  return (
    <>
    <PlatformHeader/>
    <Container className='my-5'>
      <Row>
        {/* Sol Taraf: Dikey Menü */}
        <Col md={3}>
          <Nav className="flex-column">
            <Nav.Link onClick={() => setActiveTab("kisiselbilgilerim")}>Kişisel Bilgilerim</Nav.Link>
            <Nav.Link onClick={() => setActiveTab("deneyimlerim")}>Deneyimlerim</Nav.Link>
            <Nav.Link onClick={() => setActiveTab("egitimhayatim")}>Eğitim Hayatım</Nav.Link>
            <Nav.Link onClick={() => setActiveTab("yetkinliklerim")}>Yetkinliklerim</Nav.Link>
            <Nav.Link onClick={() => setActiveTab("sertifikalarım")}>Sertifikalarım</Nav.Link>
            <Nav.Link onClick={() => setActiveTab("medya")}>Medya Hesaplarım</Nav.Link>
            <Nav.Link onClick={() => setActiveTab("yabancı dillerim")}>Yabancı Dillerim</Nav.Link>
            <Nav.Link onClick={() => setActiveTab("ayarlar")}>Ayarlar</Nav.Link>
          </Nav>
        </Col>

        {/* Sağ Taraf: İçerik Alanı */}
        <Col md={9}>
          <Card>
            {renderContent()}
          </Card>
        </Col>
      </Row>
    </Container>
    </>
  );
}

export default PlatformKisiselMenu