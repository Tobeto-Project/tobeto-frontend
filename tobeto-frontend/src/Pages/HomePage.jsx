import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Banner from "../Components/Layouts/Banner";
import Header from "../Components/Layouts/Header";
import Footer from "../Components/Layouts/Footer";
import "../Styles/PagesStyles/HomePageStyle.css";
import link from "../Assets/Images/anasayfa-left-first.svg";
import link2 from "../Assets/Images/anasayfa-right.svg";
import link3 from "../Assets/Images/anasayfa-left-inside.png";
import link4 from "../Assets/Images/istanbulkodluyor-black.svg";

const HomePage = () => {
  return (
    <div className="bg-dark body-container bg-dark">
      <Banner />
      <Header />

      <div className="main-content">
        <Container className="mt-4">
          <Row>
            <Col md={6} className="image-container">
              <Image src={link} fluid />
              <div className="overlay">
                <p>
                  Hayalindeki teknoloji kariyerini başlat! İstediğin yoldan
                  hızda
                </p>
                <img src={link3} alt="Ek Görsel" style={{height:"150px",width:"150px"}} />
              </div>
            </Col>
            <Col md={6} className="image-container">
              <Image src={link2} fluid className="rounded" />
              <div className="overlay">
                <p>Aradığın " İş " Burada!</p>
                <img src={link4} alt="Ek Görsel" style={{height:"150px",width:"150px"}} />
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <Footer />
    </div>
  );
};

export default HomePage;
