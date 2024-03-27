import React, { useState, useEffect } from "react";
import { Accordion, Card, Button, Container, Col, Row } from "react-bootstrap";
import { BsChevronRight, BsChevronDown } from "react-icons/bs";
import VideoComponent from "./VideoComponent";

const ContentAccordion = ({ onLessonNameChange, courseModules, setLikeToast, setBookmarkToast }) => {
    const [openAccordion, setOpenAccordion] = useState(null);
    const [selectedLesson, setSelectedLesson] = useState(null);

    useEffect(() => {
        console.log("Course Modules:", courseModules);
        if (courseModules && courseModules.length > 0 && !selectedLesson) {
            setSelectedLesson(courseModules[0].lessons && courseModules[0].lessons[0]); // İlk dersi seçiyoruz
        }
    }, [courseModules, selectedLesson]);

    const handleToggleAccordion = (index) => {
        setOpenAccordion((prevOpenAccordion) => (prevOpenAccordion === index ? null : index));
        setSelectedLesson(null);
    };

    const handleLessonClick = (lessonName) => {
        setSelectedLesson(lessonName);
        setLikeToast(false);
        setBookmarkToast(false);
        if (typeof onLessonNameChange === "function") {
            onLessonNameChange(lessonName);
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
                                            {module.lessons &&
                                                module.lessons.map((lesson, lessonIndex) => (
                                                    <button key={lessonIndex} style={{ marginBottom: "5px", border: "none", textAlign: "left" }} onClick={() => handleLessonClick(lesson)}>
                                                        {lesson}
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
                        lessonName={selectedLesson}
                        onLessonNameChange={setSelectedLesson}
                        setLikeToast={setLikeToast}
                        setBookmarkToast={setBookmarkToast}
                    />
                </Col>
            </Row>
        </Container>
    );
};

export default ContentAccordion;