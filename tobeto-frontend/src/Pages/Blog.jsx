import React, { useState, useEffect } from "react";
import Banner from "../Components/Layouts/Banner";
import Header from "../Components/Layouts/Header";
import Footer from "../Components/Layouts/Footer";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/esm/Container";
import "../Styles/PagesStyles/BlogStyle.css";
import { Link } from "react-router-dom";
import sanitizeHtml from 'sanitize-html';
import CalendarButton from "../Components/Common/CalendarButton";
import { fetchBlogs } from "../Services/blogService";
import ChatBot from "../Components/Common/ChatBot";

const Blog = () => {
  const [blogs, setBlogs] = useState({ items: [] });

  useEffect(() => {
    const fetchBlogsData = async () => {
      try {
        const data = await fetchBlogs();
        setBlogs(data);
      } catch (error) {
      }
    };

    fetchBlogsData();
  }, []);

  const truncateHtml = (html, maxLength) => {
    const strippedString = html.replace(/(<([^>]+)>)/gi, "");
    if (strippedString.length > maxLength) {
      return strippedString.substring(0, maxLength) + "...";
    }
    return strippedString;
  };
  
  const createMarkup = (htmlContent) => {
    const truncatedContent = truncateHtml(htmlContent, 100);
    const sanitizedContent = sanitizeHtml(truncatedContent, {
      allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img', 'p', 'ul', 'ol', 'li', 'strong', 'em', 'u']),
      allowedAttributes: {}
    });
    return { __html: sanitizedContent };
  };

  return (
    <div className="body-container pages-content">
      <Banner />
      <Header />
      <CalendarButton/>
      <ChatBot/>
      <div className="container" style={{ paddingTop: "12em", marginBottom: "1em", width: "max-content" }}>

        <div className="row text-center">
          <h1 className="ms-4">Blog</h1>
        </div>
      </div>
      <Container>
        <div className="grid-container">
          {Array.isArray(blogs.items) && blogs.items.map((blog, index) => (
            <div key={index} className="card-container">
              <Link to={`/bloglar/${blog.id}`} style={{ textDecoration: "none", color: "inherit" }}>
                <Card className="custom-card">
                  <Card.Body className="d-flex flex-column justify-content-end" style={{ height: "100%" }}>
                    <div className="date-label fw-bold">10.03.1999</div>
                    <div className="card-content">
                      <div>
                        <Card.Title className="fw-bold">
                          {truncateHtml(blog.title, 50)}
                        </Card.Title>
                        <Card.Text className="description">
                          <div dangerouslySetInnerHTML={createMarkup(blog.text)} />
                        </Card.Text>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Link>
            </div>
          ))}
        </div>

      </Container>
      <Footer />
    </div>
  );
};

export default Blog;
