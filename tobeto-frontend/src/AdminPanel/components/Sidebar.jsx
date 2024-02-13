import React, { useState } from 'react';
import { Container, Row, Col, Nav, Card } from 'react-bootstrap';
import Students from '../pages/student/Students';
import BlogForm from '../pages/blog/BlogForm';
import Bloglar from '../pages/blog/Bloglar';
import { ToastContainer } from 'react-toastify';
import BasinForm from '../pages/press/BasinForm';
import BasinBloglar from '../pages/press/BasinBloglar';


const Sidebar = () => {
    const [activeTab, setActiveTab] = useState('ogrenci');

    const renderContent = () => {
      switch (activeTab) {
        case "blog":
          return <Card.Body><BlogForm/>
          <ToastContainer position="bottom-right" autoClose={2000} /></Card.Body>;
        case "bloglarımız":
          return <Card.Body><Bloglar/>
          <ToastContainer position="bottom-right" autoClose={2000} /></Card.Body>;
        case "ogrenci":
          return <Card.Body><Students/>
          <ToastContainer position="bottom-right" autoClose={2000} /></Card.Body>;
        case "instructors":
            return <Card.Body>Eğitmenlerimiz burada listelenecek</Card.Body>;
        case "employee":
            return <Card.Body>Görevliler burada listelenecek</Card.Body>;
        case "basindabiz":
            return <Card.Body><BasinForm/></Card.Body>;
        case "basindabizbloglarımız":
            return <Card.Body><BasinBloglar/></Card.Body>;
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
                <Nav.Link className='text-white'  onClick={() => setActiveTab("ogrenci")}>Öğrencilerimiz</Nav.Link>
                <Nav.Link className='text-white'  onClick={() => setActiveTab("instructors")}>Eğitmenlerimiz</Nav.Link>
                <Nav.Link className='text-white'  onClick={() => setActiveTab("employee")}>Görevliler</Nav.Link>
                <Nav.Link className='text-white'  onClick={() => setActiveTab("blog")}>Blog İşlemleri</Nav.Link>
                <Nav.Link className='text-white'  onClick={() => setActiveTab("bloglarımız")}>Bloglar</Nav.Link>
                <Nav.Link className='text-white'  onClick={() => setActiveTab("basindabiz")}>Basında Biz</Nav.Link>
                <Nav.Link className='text-white'  onClick={() => setActiveTab("basindabizbloglarımız")}>Basında Biz Bloglar</Nav.Link>
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