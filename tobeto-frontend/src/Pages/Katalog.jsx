import React from "react";
import Banner from "../Components/Layouts/Banner";
import Header from "../Components/Layouts/Header";
import Footer from "../Components/Layouts/Footer";
import KatalogCard from "../Components/Common/KatalogCard";
import KatalogMenu from "../Components/Common/KatalogMenu";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import KatalogFilter from "../Components/Common/KatalogFilter";

const Katalog = () => {
  return (
    <div className="bg-dark body-container bg-dark">
      <Banner />
      <Header />
      <div className="main-content">
      <KatalogFilter/>
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
