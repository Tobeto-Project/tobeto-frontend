// Accordions.js

import React, { useState } from "react";
import { Accordion, Card, Button, Container, Col, Row } from "react-bootstrap";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

const Accordions = () => {
    const accordionItems = [
        {
            title: "Tobeto 'Yazılımda Başarı' Testi & Huawei Talent Interview",
            content:
                "Tobeto'da kendini sürekli değerlendirerek, öğrenim yolculuğunu kişiselleştirebilir ve işe hazırlık sürecine yön verebilirsin. Ücretsiz sunduğumuz Tobeto 'Yazılımda Başarı' Testi ile teknik bilgi ve yetkinliklerini kolaylıkla ölç. Aldığın mesleki eğitimlerin sonunda uluslararası geçerliliğe sahip Huawei Talent Interview teknik bilgi sınavları ile öğrendiğine emin ol, rozetini al.",
            image: "https://tobeto.com/a1.png",
        },
        {
            title: "Tobeto Kişisel Gelişim Envanteri",
            content:
                "Yeni bir meslek. Daha yüksek ücret. Uzaktan çalışma. Hedeflediğin ne olursa olsun, hepsine uygun bir yol mutlaka var. Bir sonraki hamleni planlamaya başlamadan önce üyelerimize ücretsiz sunduğumuz Tobeto Kişisel Gelişim Envanteri'mizi yap, kendin için en uygun kariyer alanlarını keşfet.",
            image: "https://tobeto.com/a2.png",
        },
        {
            title: "Codecademy & Tobeto",
            content:
                "Codecademy; 50 milyondan fazla üyesinin yeni teknolojik beceriler konusunda meraklanması, projelere imza atması, kariyerini geliştirmesine yardımcı olan bir online kodlama eğitimi platformudur. Tobeto'nun, gerçek zamanlı, kendi hızında, etkileşimli öğrenme ortamıyla öğrenmek daha kolay! Üstelik, Türkçe derslerimiz ve öğrenmeni destekleyici kaynaklarımız bu süreci kolaylaştırmak ve hızlandırmak için senin yanında!",
            image: "https://tobeto.com/calogo.png",
        },
        {
            title: "Bilgiyi Beceriye Çevirme",
            content:
                "Canlı dersler, becerilerini derinleştirebileceğin uygulamalar, gerçek senaryoları deneyimleyebileceğin projeler ve mentör desteği ile becerilerini geliştir, süreci kendin yönet.",
            image: "https://tobeto.com/a5.png",
        },
        {
            title: "Doğru İş İle Eşleşme",
            content:
                "Uzmanlığın için yeni becerileri kazanmak (reskill) veya yeni bir role başlamak (upskill) için gelişim yolculuğunu tamamla, profilini güncelle, teknoloji odaklı iş fırsatlarıyla eşleş.",
            image: "https://tobeto.com/a6.png",
        },
        {
            title: "Hayat Boyu Öğrenme",
            content: "Sürekli öğrenme ve sürdürebilir gelişim için Tobeto topluluğuna dahil ol.",
            image: "https://tobeto.com/a4.png",
        },
    ];
    const [openAccordion, setOpenAccordion] = useState(null);
    const handleToggleAccordion = (index) => {
        setOpenAccordion((prevOpenAccordion) => (prevOpenAccordion === index ? null : index));
    };

    return (
        <Container className="py-5">
            {accordionItems.map((item, index) => (
                <Accordion key={index} activeKey={openAccordion === index ? `item-${index + 1}` : null}>
                    <Card
                        onClick={() => handleToggleAccordion(index)}
                        style={{ cursor: "pointer", backgroundColor: "#2F2F2F", marginBottom: "10px" }}
                    >
                        <Card.Header
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                backgroundColor: "#2F2F2F",
                                padding: "15px",
                                border: "1px solid #1C1C1C",
                                borderRadius: "8px",
                                fontWeight:"bold"

                            }}
                        >
                            <abc
                                as={Button}
                                variant="link"
                                eventKey={`item-${index + 1}`}
                                onClick={(e) => {
                                    e.stopPropagation(); // Prevent card click from triggering accordion toggle
                                }}
                                style={{
                                    color: "#6F32AD",
                                    textDecoration: "none",
                                    fontSize: "1.2rem",
                                }}
                            >
                                {item.title}
                            </abc>
                            <div style={{ transition: "transform 0.3s", transform: openAccordion === index ? "rotate(180deg)" : "rotate(0deg)", color: "white" }}>
                                {openAccordion === index ? <BsChevronUp /> : <BsChevronDown />}
                            </div>
                        </Card.Header>
                        <Accordion.Collapse eventKey={`item-${index + 1}`}>
                            <Card.Body>
                                <Row>
                                    <Col lg={9} xs={12}>
                                        <div className="acc-content-text text-white">{item.content}</div>
                                    </Col>
                                    <Col lg={3} xs={12}>
                                        <img className="img-fluid" style={{ borderRadius: "16px" }} src={item.image} alt="" />
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            ))}
        </Container>
    );
};

export default Accordions;
