import React from "react";
import "../../Styles/CommonStyles/PackageContainer.css";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";

const PackageCard = ({ title, buttonText, backgroundColor }) => {
  const cardStyle = {
    backgroundColor: backgroundColor,
  };

  return (

    <div className="package-card" style={cardStyle}>
      <div className="details">
        <h1 style={{ fontSize: "20px", fontWeight: "bold" }}>{title}</h1>
        <button className="btn btn-primary ">{buttonText}</button>
      </div>
    </div>
  );
};

const PackageContainer = () => {


  return (
    <Container>
      <Row >
        <Col>   <Link to={"/kisiselbilgiler"} className="text-white"><PackageCard
          title="Profilini oluştur"
          buttonText="Başla"
        /></Link></Col>
        <Col>        <Link to={"/degerlendirmeler"} className="text-white"><PackageCard title="Kendini değerlendir" buttonText="Başla" /></Link></Col>

        <Col >
          <Link to={"/platform-egitimler"} className="text-white"><PackageCard title="Öğrenmeye başla" buttonText="Başla" /></Link>
        </Col>

      </Row>



    </Container>



  );
};
export default PackageContainer;
