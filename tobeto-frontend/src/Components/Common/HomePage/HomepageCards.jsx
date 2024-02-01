import React from "react";
import link from "/Users/mac/Desktop/Github's/react-pair1/tobeto-frontend/src/Assets/Images/anasayfa-left-first.svg"
import link2 from "/Users/mac/Desktop/Github's/react-pair1/tobeto-frontend/src/Assets/Images/anasayfa-right.svg";
import link3 from "/Users/mac/Desktop/Github's/react-pair1/tobeto-frontend/src/Assets/Images/anasayfa-left-inside.png";
import link4 from "/Users/mac/Desktop/Github's/react-pair1/tobeto-frontend/src/Assets/Images/istanbulkodluyor-black.svg";
import { Col, Image, Row } from "react-bootstrap";

const HomepageCards = () => {
  return (
    <div>
      <Row>
        <Col md={6} className="image-container">
          <Image src={link} fluid />
          <div className="overlay">
            <p>
              Hayalindeki teknoloji kariyerini başlat! İstediğin yoldan hızda
            </p>
            <img
             className=""
              src={link3}
              alt="Ek Görsel"
              style={{ height: "150px", width: "150px" }}
            />
          </div>
        </Col>
        <Col md={6} className="image-container">
          <Image src={link2} fluid className="rounded" />
          <div className="overlay">
            <p>Aradığın " İş " Burada!</p>
            <img
              src={link4}
              alt="Ek Görsel"
              style={{ height: "150px", width: "150px" }}
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default HomepageCards;
