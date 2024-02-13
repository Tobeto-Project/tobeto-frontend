//ContentAccordion.jsx

import React, { useState } from "react";
import { Accordion, Card, Button, Container, Col, Row } from "react-bootstrap";
import { BsChevronRight, BsChevronDown } from "react-icons/bs";
import VideoComponent from "./VideoComponent";

const ContentAccordion = () => {
    const data = [
        {
            moduleName: "Podcast Paketi - Etkili İletişim",
            lessons: [
                "Podcast - 6 dk: Detaylarıyla Yazılı İletişim",
                "Podcast - 3 dk: E-Posta Yazarken Nelere Dikkat Etmeliyiz?",
                // ... diğer dersler
            ],
        },
        {
            moduleName: "Dinle, Anla, İfade Et: Etkili İletişim Gelişim Yolculuğu",
            lessons: [
                "Video - 2 dk: Dinle, Anla, İfade Et: İletişim Gelişim Yolculuğu'na Hoş Geldin",
                "E-Eğitim - 1 sa 30 dk: İletişimin Temelleri ve İletişim Tipleri",
                // ... diğer dersler
            ],
        },
        {
            moduleName: "Etkili İletişim, Diksiyon ve Beden Dili",
            lessons: [
                "Video - 3 dk: Etkili İletişim, Diksiyon ve Beden Dili - Giriş",
                "Video - 9 dk: Etkili İletişimin Hayatımızdaki Yeri ve Önemi",
                // ... diğer dersler
            ],
        },
        // Diğer modül ve dersleri de buraya ekleyebilirsin
    ];


    const [openAccordion, setOpenAccordion] = useState(null);
    const [selectedLesson, setSelectedLesson] = useState(null);

    const handleToggleAccordion = (index) => {
        setOpenAccordion((prevOpenAccordion) => (prevOpenAccordion === index ? null : index));
        setSelectedLesson(null); // Akordion kapanınca seçilen dersi sıfırla
    };


    const handleLessonClick = (lessonName, e) => {
        e.stopPropagation(); // Akordionun kapanmasını önlemek için event'in yayılmasını durdur
        setSelectedLesson(lessonName);
    };
    return (
        <Container className="py-5">
            <Row>
                {/* Sol Sütun - ContentAccordion */}
                <Col md={6}>
                    {data.map((module, moduleIndex) => (
                        <Accordion key={moduleIndex} activeKey={openAccordion === moduleIndex ? `module-${moduleIndex + 1}` : null}>
                            <Card
                                onClick={() => handleToggleAccordion(moduleIndex)}
                                style={{
                                    cursor: "pointer",
                                    backgroundColor: "white",
                                    marginBottom: "10px",
                                }}
                            >
                                <Card.Header
                                    style={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        backgroundColor: "white",
                                        padding: "15px",
                                        border: "0",
                                        borderRadius: "8px",
                                        fontWeight: "bold",
                                    }}
                                >
                                    <span
                                        as={Button}
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleToggleAccordion(moduleIndex);
                                        }}
                                        style={{
                                            color: "#000",
                                            textDecoration: "none",
                                            fontSize: "1.2rem",
                                            cursor: "pointer",
                                        }}
                                    >
                                        {module.moduleName}
                                    </span>
                                    <div style={{ display: "flex", alignItems: "center" }}>
                                        <div style={{ transition: "transform 0.3s", transform: openAccordion === moduleIndex ? "rotate(0deg)" : "rotate(-90deg)", color: "black" }}>
                                            {openAccordion === moduleIndex ? <BsChevronDown /> : <BsChevronRight />}
                                        </div>
                                    </div>
                                </Card.Header>
                                <Accordion.Collapse eventKey={`module-${moduleIndex + 1}`}>
                                    <Card.Body style={{ display: "flex", flexDirection: "column" }}>
                                        {module.lessons.map((lesson, lessonIndex) => (
                                            <button key={lessonIndex} style={{ marginBottom: "5px", border: "none", textAlign: "left" }} onClick={(e) => handleLessonClick(lesson, e)}>
                                                {lesson}
                                            </button>
                                        ))}
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                    ))}
                </Col>

                {/* Sağ Sütun - VideoComponent */}
                <Col md={6}>
                    <VideoComponent
                        lessonName={selectedLesson} 
                    />
                
                </Col>
            </Row>
        </Container>
    );
};

export default ContentAccordion;
