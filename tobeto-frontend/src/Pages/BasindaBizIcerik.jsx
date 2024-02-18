import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Banner from '../Components/Layouts/Banner';
import Header from '../Components/Layouts/Header';
import Footer from '../Components/Layouts/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import SocialMediaBar from '../Components/Common/SocialMediaBar';
import '../Styles/PagesStyles/BlogIcerik.css';
import CalendarButton from '../Components/Common/CalendarButton';
import  { getPressById } from '../Services/blogpressService';

const BasindaBizIcerik = () => {
    const { pressId } = useParams();
    const [press, setPress] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');
  
  useEffect(() => {
    const fetchPressDetail = async () => {
      try {
        const data = await getPressById(pressId);
        setPress(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPressDetail();
  }, [pressId]);
  
    if (isLoading) {
      return <div>Yükleniyor...</div>;
    }
  
    if (error) {
      return <div>Hata: {error}</div>; // Hata mesajını burada göster
    }
  return (
    <>
      <div className="body-container pages-content">
        <Banner />
        <Header />
        <CalendarButton/>

        <Container style={{ paddingTop: "12em", marginBottom: "1em", maxWidth: "720px" }}>
         <Row><SocialMediaBar/></Row>
          <Row>
            <Col>
            <h1 className='fw-bold mb-4'>{press.title}</h1>
            </Col>
          </Row>
          <Row>
          <Col md={12}>
            <div className="blog-content" dangerouslySetInnerHTML={{ __html: press.text }} />
          </Col>
          </Row>
        </Container>

        <Footer />
      </div>
    </>
  );
}

export default BasindaBizIcerik