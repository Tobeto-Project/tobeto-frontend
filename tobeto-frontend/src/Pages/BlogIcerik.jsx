import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Banner from '../Components/Layouts/Banner';
import Header from '../Components/Layouts/Header';
import Footer from '../Components/Layouts/Footer';
import { Col, Container, Row } from 'react-bootstrap';

const BlogIcerik = () => {
    const { blogId } = useParams();
    const [blog, setBlog] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');
  
    useEffect(() => {
      const fetchBlogDetail = async () => {
        try {
          const response = await fetch(`http://localhost:5082/api/Blogs/${blogId}`);
          if (!response.ok) {
            throw new Error('Blog yüklenirken bir hata oluştu.');
          }
          const data = await response.json();
          setBlog(data);
        } catch (error) {
          setError(error.message);
        } finally {
          setIsLoading(false);
        }
      };
  
      fetchBlogDetail();
    }, [blogId]);
  
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

        <Container style={{ paddingTop: "12em", marginBottom: "1em", maxWidth: "720px" }}>
          <Row className="text-center">
            <Col>
            <h1>{blog.title}</h1>
            </Col>
          </Row>
          <Row>
          <Col md={12}>
            <div dangerouslySetInnerHTML={{ __html: blog.text }} />
          </Col>
          </Row>
        </Container>

        <Footer />
      </div>
    </>
  );
}

export default BlogIcerik;
