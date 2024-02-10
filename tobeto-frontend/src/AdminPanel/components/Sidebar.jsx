import React, { useState } from 'react';
import { Container, Row, Col, Nav, Card } from 'react-bootstrap';
import Students from '../pages/student/Students';
import BlogForm from '../pages/blog/BlogForm';
import Bloglar from '../pages/blog/Bloglar';

const Sidebar = () => {
    const [activeTab, setActiveTab] = useState('ogrenci');

    const renderContent = () => {
      switch (activeTab) {
        case "genel":
          return <Card.Body>Genel bilgilerin olduğu kısım</Card.Body>;
        case "blog":
          return <Card.Body><BlogForm/></Card.Body>;
        case "bloglarımız":
          return <Card.Body><Bloglar/></Card.Body>;
        case "ogrenci":
          return <Card.Body><Students/></Card.Body>;
        case "basindabiz":
            return <Card.Body>Basında Biz içerikleri</Card.Body>;
        case "egitimlerim":
            return <Card.Body>Eğitimlerim içeriği burada gösterilecek</Card.Body>;
        case "duyuruvehaberler":
            return <Card.Body>image Hayatım içeriği burada gösterilecek.</Card.Body>;
        case "dil":
            return <Card.Body>İngilizce Ve Türkçe Dil seçenekleri</Card.Body>;
        case "image":
            return <Card.Body>image Hayatım içeriği burada gösterilecek.</Card.Body>;
        case "calendar":
            return <Card.Body>calendar Hayatım içeriği burada gösterilecek.</Card.Body>
        default:
            return <Card.Body>İçerik bulunamadı.</Card.Body>;
      }
    };
  
    return (
      <>
        <Container className='p-0'>
          <Row>
            {/* Sol Taraf: Dikey Menü */}
            <Col md={2} className='p-0'>
              <Nav className="flex-column vh-100 p-4" style={{backgroundColor:'#9833FF'}}>
                <Nav.Link className='text-white'  onClick={() => setActiveTab("genel")}>Genel Bilgiler</Nav.Link>
                <Nav.Link className='text-white'  onClick={() => setActiveTab("ogrenci")}>Öğrencilerimiz</Nav.Link>
                <Nav.Link className='text-white'  onClick={() => setActiveTab("blog")}>Blog Ekle</Nav.Link>
                <Nav.Link className='text-white'  onClick={() => setActiveTab("bloglarımız")}>Bloglar</Nav.Link>
                <Nav.Link className='text-white'  onClick={() => setActiveTab("basindabiz")}>Basında Biz</Nav.Link>
                <Nav.Link className='text-white'  onClick={() => setActiveTab("egitimlerim")}>Eğitimlerimiz</Nav.Link>
                <Nav.Link className='text-white'  onClick={() => setActiveTab("duyuruvehaberler")}>Duyuru ve Haberler</Nav.Link>
                <Nav.Link className='text-white'  onClick={() => setActiveTab("dil")}>Dil Seçenekleri</Nav.Link>
                <Nav.Link className='text-white'  onClick={() => setActiveTab("image")}>Görseller</Nav.Link>
                <Nav.Link className='text-white'  onClick={() => setActiveTab("calendar")}>Takvim</Nav.Link>

              </Nav>
            </Col>
  
            {/* Sağ Taraf: İçerik Alanı */}
            <Col md={10} className='p-0'>
              {renderContent()}
            </Col>
          </Row>
        </Container>
      </>
    );
  };

export default Sidebar