import React, { useState } from "react";
import { Card, Nav } from "react-bootstrap";
import logo from "../../Assets/Images/istanbulkodluyor-black.svg";

const PlatformNavigation = () => {
  const [activeTab, setActiveTab] = useState("basvurularim");

  const renderContent = () => {
    switch (activeTab) {
      case "basvurularim":
        return <Card.Body>Başvurularım içeriği burada gösterilecek.</Card.Body>;
      case "egitimlerim":
        return <Card.Body>Eğitimlerim içeriği burada gösterilecek.</Card.Body>;
      case "duyuruHaberler":
        return (
          <Card.Body>
            Duyuru ve Haberlerim içeriği burada gösterilecek.
          </Card.Body>
        );
      case "anketlerim":
        return <Card.Body>Anketlerim içeriği burada gösterilecek.</Card.Body>;
      default:
        return <Card.Body>İçerik bulunamadı.</Card.Body>;
    }
  };

  return (
    <Card>
      <img src={logo} style={{ width: "320px" }} className="m-auto my-5"></img>
      <p className="text-center fs-3">
        Ücretsiz eğitimlerle, geleceğin mesleklerinde sen de yerini al.
      </p>
      <p className="text-center fs-2 fw-bold">Aradığın “İş” Burada!</p>
      <Card.Header>
        <Nav variant="tabs" defaultActiveKey="#basvurularim">
          <Nav.Item>
            <Nav.Link
              href="#basvurularim"
              onClick={() => setActiveTab("basvurularim")}
            >
              Başvurularım
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              href="#egitimlerim"
              onClick={() => setActiveTab("egitimlerim")}
            >
              Eğitimlerim
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              href="#duyuruHaberler"
              onClick={() => setActiveTab("duyuruHaberler")}
            >
              Duyuru ve Haberlerim
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              href="#anketlerim"
              onClick={() => setActiveTab("anketlerim")}
            >
              Anketlerim
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Card.Header>
      {renderContent()}
    </Card>
  );
};

export default PlatformNavigation;
