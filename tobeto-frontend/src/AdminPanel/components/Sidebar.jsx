import React, { useState } from 'react';
import { Container, Row, Col, Nav, Card } from 'react-bootstrap';

const Sidebar = () => {
    const [activeTab, setActiveTab] = useState('kisiselbilgilerim');

    const renderContent = () => {
      switch (activeTab) {
        case "platform":
          return <Card.Body>images</Card.Body>;
        case "katalog":
          return <Card.Body>katalog içeriği burada gösterilecek.</Card.Body>;
        case "ogrenci":
          return <Card.Body>ogrenci Hayatım içeriği burada gösterilecek.</Card.Body>;
        case "egitmen":
            return <Card.Body>egitmen Hayatım içeriği burada gösterilecek.</Card.Body>;
        case "image":
            return <Card.Body>image Hayatım içeriği burada gösterilecek.</Card.Body>;
        case "calendar":
            return <Card.Body>calendar Hayatım içeriği burada gösterilecek.</Card.Body>
      }
    };
  
    return (
      <>
        <Container className='p-0'>
          <Row>
            {/* Sol Taraf: Dikey Menü */}
            <Col md={2}>
              <Nav className="flex-column vh-100" style={{backgroundColor:'#9833FF'}}>
                <Nav.Link className='text-white'  onClick={() => setActiveTab("platform")}>Platform Eğitim</Nav.Link>
                <Nav.Link className='text-white'  onClick={() => setActiveTab("katalog")}>Katalog Eğitim</Nav.Link>
                <Nav.Link className='text-white'  onClick={() => setActiveTab("ogrenci")}>Öğrenci Ekle/Sil</Nav.Link>
                <Nav.Link className='text-white'  onClick={() => setActiveTab("egitmen")}>Eğitmen Ekle/Sil</Nav.Link>
                <Nav.Link className='text-white'  onClick={() => setActiveTab("image")}>Görseller</Nav.Link>
                <Nav.Link className='text-white'  onClick={() => setActiveTab("calendar")}>Takvim</Nav.Link>

              </Nav>
            </Col>
  
            {/* Sağ Taraf: İçerik Alanı */}
            <Col md={9}>
              {renderContent()}
            </Col>
          </Row>
        </Container>
      </>
    );
  };

export default Sidebar