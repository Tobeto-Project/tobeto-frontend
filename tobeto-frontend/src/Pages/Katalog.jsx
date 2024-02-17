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

const Katalog = () => {
  return (
    <div className="pages-content body-container">
      <Banner />
      <Header />
      <div className="main-content">
      <MiddleBannerKatalog/>
        <Container className="mt-4">
          <Row>
            <Col sm={3}><KatalogMenu /></Col>
            <Col sm={9}><KatalogCard /></Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </div>
  );
};
export default Katalog;
