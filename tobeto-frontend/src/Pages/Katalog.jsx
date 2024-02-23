import React from "react";
import Banner from "../Components/Layouts/Banner";
import Header from "../Components/Layouts/Header";
import Footer from "../Components/Layouts/Footer";
import KatalogCard from "../Components/Common/KatalogCard";
import KatalogMenu from "../Components/Common/KatalogMenu";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MiddleBannerKatalog from "../Components/Common/MiddleBannerKatalog";
import CalendarButton from "../Components/Common/CalendarButton";
import ChatBot from "../Components/Common/ChatBot";

const Katalog = () => {
  return (
    <div className="pages-content body-container">
      <Banner />
      <Header />
      <CalendarButton />
      <ChatBot/>
      <div className="main-content">
        <MiddleBannerKatalog />
        <Container fluid className="mt-4">
          <Row>
     
            <Col sm={5} md={3} lg={3}  className="mb-3 mb-sm-0">   <KatalogMenu menuClassName abc def /></Col>

       
            <Col sm={7} md={9} lg={9}  ><KatalogCard /></Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default Katalog;
