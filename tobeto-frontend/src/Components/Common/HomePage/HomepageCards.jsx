import React from "react";
import link from "../../../../src/Assets/Images/anasayfa-left-first.svg"
import link2 from "../../../../src/Assets/Images/anasayfa-right.svg";
import link3 from "../../../../src/Assets/Images/anasayfa-left-inside.png";
import link4 from "../../../../src/Assets/Images/istanbulkodluyor-logo-white.svg";
import { Button, Col, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const HomepageCards = () => {
  return (
    <div>
      <Row>
        <Col md={6} className="image-container">
          <Image src={link} fluid />
          <div className="overlay">
            <p className="ms-4 fw-bold fs-3">
              Hayalindeki teknoloji <br /> kariyerini başlat! <br />İstediğin yoldan <span className="px-2 rounded-pill" style={{backgroundColor:"#9927E7"}}>hızda</span>             
              <Link to={"/uyeol"}><Button className="p-1" style={{margin:"0"}}>Ücretsiz Üye Ol</Button></Link>
            </p>

            <img
             className="me-4"
              src={link3}
              alt="Ek Görsel"
            
            />
          </div>
        </Col>
        <Col md={6} className="image-container">
          <Image src={link2} fluid className="rounded" />
          <div className="overlay2">
            <div className="overlay2-box"></div><p className="fw-bold">Aradığın <span style={{color:"#00B078"}}>"</span> İş <span style={{color:"#00B078"}}>"</span> Burada!</p>
            <img
            className="me-4"
              src={link4}
              alt="Ek Görsel"
            />
            <Link to={"/IstanbulKodluyor"}><Button className="p-1 overlay-button" style={{margin:"0"}}>Başvur</Button></Link>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default HomepageCards;
