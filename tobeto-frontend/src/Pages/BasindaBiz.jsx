import React, { useEffect, useState } from "react";
import Banner from "../Components/Layouts/Banner";
import Header from "../Components/Layouts/Header";
import Footer from "../Components/Layouts/Footer";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/esm/Container";
import "../Styles/PagesStyles/BlogStyle.css";
import sanitizeHtml from 'sanitize-html';
import { Link } from "react-router-dom";
import CalendarButton from "../Components/Common/CalendarButton";
import API_CONFIG from "../Services/ApiConfig";
import { getPressList } from "../Services/blogpressService";
import ChatBot from "../Components/Common/ChatBot";

const BasindaBiz = () => {
  const [press, setPress] = useState({ items: [] });

  useEffect(() => {
    const fetchPressList = async () => {
      try {
        const data = await getPressList();
        setPress(data);
      } catch (error) {
        console.error("Basında Biz yüklenirken bir hata oluştu:", error);
      }
    };

    fetchPressList();
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
      <CalendarButton />
      <ChatBot/>
      <div className="container" style={{ paddingTop: "12em", marginBottom: "1em", width: "max-content" }}>

        <div className="row text-center">
          <h1 className="ms-4">Basında Biz</h1>
        </div>
      </div>
      <Container>
        <div className="grid-container">
          {Array.isArray(press.items) && press.items.map((press, index) => (
            <div key={index} className="card-container">
              <Link to={`/basindabizblog/getbyId/${press.id}`} style={{ textDecoration: "none", color: "inherit" }}>
                <Card className="custom-card">
                  <Card.Body className="d-flex flex-column justify-content-end" style={{ height: "100%" }}>
                    <div className="date-label fw-bold">10.03.1999</div>
                    <div className="card-content">
                      <div>
                        <Card.Title className="fw-bold">
                          {truncateHtml(press.title, 50)}
                        </Card.Title>
                        <Card.Text className="description">
                          <div dangerouslySetInnerHTML={createMarkup(press.text)} />
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

export default BasindaBiz;
