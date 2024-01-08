import React, { useState } from 'react';
import { Container, Row, Col, Nav, Card } from 'react-bootstrap';
import PlatformForm from './PlatformForm';

function PlatformKisiselMenu() {
  const [activeTab, setActiveTab] = useState("basvurularim");

  const renderContent = () => {
    switch (activeTab) {
      case "basvurularim":
        return <Card.Body><PlatformForm/></Card.Body>;
      case "egitimlerim":
        return <Card.Body>Eğitimlerim içeriği burada gösterilecek.</Card.Body>;
      case "duyuruHaberler":
        return <Card.Body>Duyuru ve Haberlerim içeriği burada gösterilecek.</Card.Body>;
      case "anketlerim":
        return <Card.Body>Anketlerim içeriği burada gösterilecek.</Card.Body>;
      default:
        return <Card.Body>İçerik bulunamadı.</Card.Body>;
    }
  };

  return (
    <Container>
      <Row>
        {/* Sol Taraf: Dikey Menü */}
        <Col md={3}>
          <Nav className="flex-column">
            <Nav.Link onClick={() => setActiveTab("basvurularim")}>Başvurularım</Nav.Link>
            <Nav.Link onClick={() => setActiveTab("egitimlerim")}>Eğitimlerim</Nav.Link>
            <Nav.Link onClick={() => setActiveTab("duyuruHaberler")}>Duyuru ve Haberlerim</Nav.Link>
            <Nav.Link onClick={() => setActiveTab("anketlerim")}>Anketlerim</Nav.Link>
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
  );
}

export default PlatformKisiselMenu