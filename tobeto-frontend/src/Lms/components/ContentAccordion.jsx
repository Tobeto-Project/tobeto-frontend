import React, { useState } from "react";
import { Accordion, Card, Button, Container, Col, Row } from "react-bootstrap";
import { BsChevronRight, BsChevronDown } from "react-icons/bs";
import VideoComponent from "./VideoComponent";
import { getAsyncLessonsByCourseModule } from "../../Services/EducationService";

const ContentAccordion = ({ onLessonNameChange, courseModules, setLikeToast, setBookmarkToast }) => {
    const [openAccordion, setOpenAccordion] = useState(null);
    const [selectedLesson, setSelectedLesson] = useState(null);
    const [asyncLessons, setAsyncLessons] = useState({});

    const handleToggleAccordion = (index) => {
        setOpenAccordion((prevOpenAccordion) => (prevOpenAccordion === index ? null : index));
        setSelectedLesson(null);
        const clickedModuleId = courseModules[index].id;
        if (!asyncLessons[clickedModuleId]) {
            getAsyncLessonsByCourseModule(clickedModuleId)
                .then(lessons => {
                    setAsyncLessons(prevAsyncLessons => ({ ...prevAsyncLessons, [clickedModuleId]: lessons }));
                })
                .catch(error => {
                    console.error('Error fetching async lessons:', error);
                });
        }
    };

    const handleLessonClick = (lesson, e) => {
        e.stopPropagation();
        setSelectedLesson(lesson); // Seçili dersi ayarla
        setLikeToast(false);
        setBookmarkToast(false);
        if (typeof onLessonNameChange === "function") {
            onLessonNameChange(lesson.name); // Sadece ders adını iletiyoruz
        }
    };

    return (
        <Container className="py-5">
            <Row>
                <Col md={6}>
                    {courseModules &&
                        courseModules.map((module, moduleIndex) => (
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
                                            {module.name}
                                        </span>
                                        <div style={{ display: "flex", alignItems: "center" }}>
                                            <div
                                                style={{
                                                    transition: "transform 0.3s",
                                                    transform: openAccordion === moduleIndex ? "rotate(0deg)" : "rotate(-90deg)",
                                                    color: "black",
                                                }}
                                            >
                                                {openAccordion === moduleIndex ? <BsChevronDown /> : <BsChevronRight />}
                                            </div>
                                        </div>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey={`module-${moduleIndex + 1}`}>
                                        <Card.Body style={{ display: "flex", flexDirection: "column" }}>
                                            {asyncLessons[module.id] && asyncLessons[module.id].map((lesson, lessonIndex) => (
                                                <button key={lessonIndex} style={{ marginBottom: "5px", border: "none", textAlign: "left" }} onClick={(e) => handleLessonClick(lesson, e)}>
                                                    {lesson.name}
                                                </button>
                                            ))}
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                            </Accordion>
                        ))}
                </Col>

                <Col md={6}>
                    <VideoComponent
                        lesson={selectedLesson} // Seçili dersi props olarak geçir
                        setLikeToast={setLikeToast}
                        setBookmarkToast={setBookmarkToast}
                    />
                </Col>
            </Row>
        </Container>
    );
};

export default ContentAccordion;
