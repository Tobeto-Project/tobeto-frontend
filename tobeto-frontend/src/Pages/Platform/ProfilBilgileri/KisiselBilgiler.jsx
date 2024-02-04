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
import '../../../Styles/PagesStyles/PlatformStyle/KisiselBilgilerStyle.css';

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
  const getTabStyle = (tabName) => {
    if (activeTab === tabName) {
      return { color: '#9833FF' };
    } else {
      return { color: '#828282' };
    }
  };
  

  return (
    <>
    <PlatformHeader/>
    <Container className='my-5'>
      <Row>
        <Col md={3}>
          <Nav className="flex-column ">
            <Nav.Link 
            className='fw-bold' 
            style={getTabStyle("kisiselbilgilerim")} 
            onClick={() => setActiveTab("kisiselbilgilerim")}>
            <img className='me-2 mb-1' src='https://tobeto.com/user.svg' style={getTabStyle("kisiselbilgilerim")}></img>Kişisel Bilgilerim</Nav.Link>

            <Nav.Link className='fw-bold mt-2'  style={getTabStyle("deneyimlerim")} onClick={() => setActiveTab("deneyimlerim")}><img className='me-2 mb-1' src='https://tobeto.com/business.svg' style={getTabStyle("deneyimlerim")}></img>Deneyimlerim</Nav.Link>

            <Nav.Link className='fw-bold  mt-2'  style={getTabStyle("egitimhayatim")} onClick={() => setActiveTab("egitimhayatim")}><img className='me-2 mb-1' src='https://tobeto.com/book.svg' style={getTabStyle("egitimhayatim")}></img>Eğitim Hayatım</Nav.Link>

            <Nav.Link className='fw-bold  mt-2'  style={getTabStyle("yetkinliklerim")} onClick={() => setActiveTab("yetkinliklerim")}><img className='me-2 mb-1' src='https://tobeto.com/award.svg' style={getTabStyle("yetkinliklerim")}></img>Yetkinliklerim</Nav.Link>

            <Nav.Link className='fw-bold  mt-2'  style={getTabStyle("sertifikalarım")} onClick={() => setActiveTab("sertifikalarım")}><img className='me-2 mb-1' src='https://tobeto.com/certificates.svg' style={getTabStyle("sertifikalarım")}></img>Sertifikalarım</Nav.Link>

            <Nav.Link className='fw-bold  mt-2'  style={getTabStyle("medya")} onClick={() => setActiveTab("medya")}><img className='me-2 mb-1' src='https://tobeto.com/globe.svg' style={getTabStyle("medya")}></img>Medya Hesaplarım</Nav.Link>

            <Nav.Link className='fw-bold  mt-2'  style={getTabStyle("yabancı dillerim")} onClick={() => setActiveTab("yabancı dillerim")}><img className='me-2 mb-1' src='https://tobeto.com/translate.svg' style={getTabStyle("yabancı dillerim")}></img>Yabancı Dillerim</Nav.Link>

            <Nav.Link className='fw-bold  mt-2'  style={getTabStyle("ayarlar")} onClick={() => setActiveTab("ayarlar")}><img className='me-2 mb-1' src='https://tobeto.com/settings.svg' style={getTabStyle("ayarlar")}></img>Ayarlar</Nav.Link>
          </Nav>
        </Col>

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

export default PlatformKisiselMenu;