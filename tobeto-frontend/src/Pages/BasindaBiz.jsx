import React from "react";
import Banner from "../Components/Layouts/Banner";
import Header from "../Components/Layouts/Header";
import Footer from "../Components/Layouts/Footer";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/esm/Col";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/esm/Container";
import "../Styles/PagesStyles/BlogStyle.css";

const BasindaBiz = () => {
  return (
    <div className="body-container pages-content">
      <Banner />
      <Header />
      <div
        className="container"
        style={{
          "padding-top": "12em",
          "margin-bottom": "1em",
          width: "max-content",
        }}
      >
        <div className="row text-center">
          <h1 className="ms-4">Basinda Biz</h1>
        </div>
      </div>
      <Container>
        <Row>
          <Col md={4}>
            <div className="card-container">
              <a>
                <Card className="custom-card">
                  <Card.Body
                    className="d-flex flex-column justify-content-end"
                    style={{ height: "100%" }}
                  >
                    <div className="date-label fw-bold">2 Şubat 2024</div>
                    <div className="card-content">
                      <div>
                        <Card.Title className="fw-bold">Card Title</Card.Title>
                        <Card.Text className="description">
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Officia minus tenetur temporibus, assumenda sint
                          voluptates?
                        </Card.Text>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default BasindaBiz;
