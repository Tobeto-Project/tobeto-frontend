import React from "react";
import Banner from "../Components/Layouts/Banner";
import Header from "../Components/Layouts/Header";
import Footer from "../Components/Layouts/Footer";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/esm/Col";
import Card from 'react-bootstrap/Card';
import Container from "react-bootstrap/esm/Container";

const Blog = () => {
  return (
    <div className="body-container pages-content">
      <Banner />
      <Header />
      <div className="container" style={{ 'padding-top': '12em', 'margin-bottom': '1em', 'width': 'max-content' }}>
        <div className="row text-center">
          <h1 className="ms-4">Blog</h1>
        </div>
      </div>
      <Container>

        <Row>
          <Col md={4}>
            <div style={{ padding: 4 }}>
              <a className="blog-card" href="">
                <Card style={{
                  width: '350px', height: '450px',
                  background: `url("https://images.nightcafe.studio//assets/tdraw-girl.jpg?tr=w-1200,c-at_max")`, backgroundSize: 'cover'
                }}>
                  <Card.Body>
                    <div class="date" style={{ position: 'absolute', top: '0', right: '0', opacity: '0.8', padding: '1em', color: 'white' }}>2 Şubat 2024</div>
                    <div className="d-flex " style={{ flexDirection: 'column', justifyContent: 'flex-end',alignContent:'flex-end'}}>
                      <Card.Title style={{ color: '#FFFFFF' }}>Card Title</Card.Title>
                      <Card.Text className="description" style={{ color: '#FFFFFF' }}>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia minus tenetur temporibus, assumenda sint voluptates?
                      </Card.Text>
                    </div>
                  </Card.Body>
                </Card>
              </a>
            </div>
          </Col>
          <Col md={4}>
            <div style={{ padding: 4 }}>
              <a className="blog-card" href="">
                <Card style={{
                  width: '350px', height: '450px',
                  background: `url("https://images.nightcafe.studio/jobs/K8WrdX7EOvXMP2Hu8QBR/K8WrdX7EOvXMP2Hu8QBR--2--0xle7_12.5x.jpg?tr=w-1600,c-at_max")`, backgroundSize: 'cover'
                }}>
                  <Card.Body>
                    <div class="date" style={{ position: 'absolute', top: '0', right: '0', opacity: '0.8', padding: '1em', color: 'white' }}>2 Şubat 2024</div>
                    <Card.Title style={{ color: '#FFFFFF' }}>Card Title</Card.Title>
                    <Card.Text className="description" style={{ color: '#FFFFFF' }}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quidem eos repudiandae nihil nam vel.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </a>
            </div>
          </Col>
          <Col md={4}></Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Blog