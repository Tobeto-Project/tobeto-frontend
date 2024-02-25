import ListGroup from 'react-bootstrap/ListGroup';
import "../../Styles/CommonStyles/KatalogMenuStyle.css";

import React, { useState, useEffect } from "react";
import { Accordion, Card, Button, Container, Col, Row, Form, InputGroup, FormControl } from "react-bootstrap";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

const KatalogMenu = (menuClassName) => {
  const data = {
    "Bana özel": [],
    Kategori: ["Tüm Eğitimler", "Ücretli Eğitimler", "Ücretsiz Eğitimler"],
    Eğitimler: ["Tüm Eğitimler", "Dijital Gelişim", "Profesyonel Gelişim"],
    Seviye: ["Tüm Seviyeler", "Başlangıç", "Orta", "İleri"],
    Konu: [
      "C#", "Profesyonel Gelişim Eğitimleri", "Çeşitlilik ve Kapsayıcılık", "Sunum Becerileri", "Başarı ve Sonuç Odaklılık", "Takım Bilinci", "Etkili İletişim ve İlişki Yönetimi", "Karar Verme", "Profesyonellik", "Kişisel Motivasyon", "Problem Çözme", "Yenilikçilik ve Yaratıcılık", "Verimlilik ve Zaman Yönetimi", "Müzakere Becerileri", "Duygusal Zeka", "Çevik Düşünme", "Esneklik", "Sürekli Gelişim", "Ticari Odaklılık", "Çatışma Çözme", "Azim ve Direnç", "Proaktif Olma", "Kariyer Yönetimi", "Stres Yönetimi", "Kritik Düşünme", "Kişisel Güç ve Güvenilirlik", "Özdisiplin", "Programlama", "Yazılım Geliştirme", "Finansta Mükemmellik", "IK' da Mükemmellik", "Bilişim Teknolojileri", "İş İngilizcesi", "Sigortacılıkta Mükemmellik", "Müşteri Duyarlılık", "Proje Yönetimi", "Ekip Yönetimi", "Stratejik Düşünme", "Liderlikte İletişim", "UI/UX Tasarımı", "VUCA Dünyası", "Dijital Dünyada Sosyal Medya İletişimi", "Büyük Veri", "Dijital Dönüşüm", "Dijital Okuryazarlık", "Sürdürülebilirlik", "Mutluluk", "Kişisel Gelişim"

    ],
    "Yazılım Dili": [
      "Tüm Diller",
      "ASPNET",
      "Bootsrap",
      "SASS",
      "JavaScript",
      "JQuery",
      "AJAX",
      "SQL",
      "C#",
      "HTML",
      "CSS",
      "Javascript",
      "React",
    ],
    Eğitmen: [
      "Tüm Eğitmenler",
      "Eğitmen Dojo",
      "Roiva Eğitmen",
      //... diğer eğitmenler
    ],
    Durum: [
      "Tüm Eğitimler",
      "Alınan Tüm Eğitimler",
      "Henüz Başlanmamış Eğitimler",
      "Tamamlanan Eğitimler",
      "Devam Eden Eğitimler",
    ],
  };

  const [openAccordion, setOpenAccordion] = useState(null);
  const [selectedRadio, setSelectedRadio] = useState({});

  const handleToggleAccordion = (index) => {
    setOpenAccordion((prevOpenAccordion) => (prevOpenAccordion === index ? null : index));
  };

  const handleRadioChange = (category, value) => {
    setSelectedRadio((prevSelectedRadio) => ({
      ...prevSelectedRadio,
      [category]: value,
    }));
  };

  const stopPropagation = (e) => {
    e.stopPropagation();
  };
  return (
    <Container className="py-3">
      {Object.keys(data).map((category, index) => (
        <Accordion key={index} activeKey={openAccordion === index ? `item-${index + 1}` : null}>
          <Card className={`bg-dark ${menuClassName}`}
            onClick={() => handleToggleAccordion(index)}
            style={{borderRadius: "30px", cursor: "pointer", marginBottom: "10px" }}
          >
            <Card.Header className='px-3'
              style={{
                display: "flex",
                justifyContent: "space-between",
                backgroundColor: "#847B8D",
                padding: "5px",
                border: "1px solid #1C1C1C",
                borderRadius: "30px",
                fontWeight: "bold",
                color: "white",

              }}
            >
              <abc 
                as={Button}
                variant="link"
                eventKey={`item-${index + 1}`}
                onClick={(e) => {
                  handleToggleAccordion(index);
                  stopPropagation(e);
                }}
                style={{
                  color: "white",
                  textDecoration: "none",
                  fontSize: "1rem"
                  

                }}
              >
                {category}
              </abc>
              <div style={{ transition: "transform 0.3s", transform: openAccordion === index ? "rotate(180deg)" : "rotate(0deg)", color: "white" }}>
                {openAccordion === index ? <BsChevronUp /> : <BsChevronDown />}
              </div>
            </Card.Header>
            <Accordion.Collapse className='bg-dark' eventKey={`item-${index + 1}`}>
              <Card.Body  onClick={stopPropagation} style={{ maxHeight: "280px", overflowY: "auto" }}>
                {category !== "Bana özel" && (
                  <>
                    {data[category].map((item, i) => (
                      <Form.Check
                        key={i}
                        type="radio"
                        name={category}
                        label={item}
                        defaultChecked={selectedRadio[category] === item}
                        onChange={() => handleRadioChange(category, item)}
                        style={{ color: "black" }}
                      />
                    ))}
                    {category !== "Konu" && category !== "Bana özel" && (
                      <InputGroup className="mb-3" onClick={stopPropagation}>
                        <FormControl placeholder="Arama yapın" />
                      </InputGroup>
                    )}
                  </>
                )}
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      ))}
    </Container>
  );
};

export default KatalogMenu;


