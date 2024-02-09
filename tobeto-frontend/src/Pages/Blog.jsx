import React, { useState, useEffect } from "react";
import Banner from "../Components/Layouts/Banner";
import Header from "../Components/Layouts/Header";
import Footer from "../Components/Layouts/Footer";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/esm/Col";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/esm/Container";
import "../Styles/PagesStyles/BlogStyle.css";
import { Link } from "react-router-dom";

const Blog = () => {
  const [blogs, setBlogs] = useState({ items: [] }); // Başlangıç durumunu bir nesne olarak ayarlayın

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("http://localhost:5082/api/Blogs/getList?PageIndex=0&PageSize=15");
        if (!response.ok) throw new Error("Blog verisi çekilemedi.");
        const data = await response.json();
        setBlogs(data); // API'den gelen tüm veriyi saklayın
      } catch (error) {
        console.error("Blog yüklenirken bir hata oluştu:", error);
      }
    };

    fetchBlogs();
  }, []);

  const truncateText = (text, limit) => {
    if (text.length > limit) {
      return text.substring(0, limit) + "...";
    }
    return text;
  };

  return (
    <div className="body-container pages-content">
      <Banner />
      <Header />
      <div
        className="container"
        style={{
          paddingTop: "12em",
          marginBottom: "1em",
          width: "max-content",
        }}
      >
        <div className="row text-center">
          <h1 className="ms-4">Blog</h1>
        </div>
      </div>
      <Container>
        <Row>
          {Array.isArray(blogs.items) && blogs.items.map((blog, index) => (
            <Col md={4} key={index}>
              <div className="card-container">
                <Link to={`/bloglar/${blog.id}`} style={{ textDecoration: "none", color: "inherit" }}>
                  <Card className="custom-card">
                    <Card.Body
                      className="d-flex flex-column justify-content-end"
                      style={{ height: "100%" }}
                    >
                      <div className="date-label fw-bold">10.03.1999</div>
                      <div className="card-content">
                        <div>
                          <Card.Title className="fw-bold">{truncateText(blog.title, 50)}</Card.Title>
                          <Card.Text className="description">
                            {truncateText(blog.text, 100)}
                          </Card.Text>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </Link>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Blog;
