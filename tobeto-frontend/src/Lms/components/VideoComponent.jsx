// VideoComponent.jsx

import React, { useState, useEffect } from "react";
import { Col, Container, Row, Offcanvas, Button } from "react-bootstrap";
import AboutComponent from "./AboutComponent";
import { BsX } from "react-icons/bs";

const VideoComponent = ({ lessonName, onLessonNameChange }) => {
    const videoUrl = "https://www.youtube.com/embed/your-video-id"; // Replace with your actual video URL
    const [showOffcanvas, setShowOffcanvas] = useState(false);
    const [initialLoad, setInitialLoad] = useState(true);

    useEffect(() => {
        const handleOutsideClick = (e) => {
            if (
                !e.target.closest('.offcanvas') &&
                !e.target.closest('.offcanvas-backdrop')
            ) {
                setShowOffcanvas(false);
            }
        };

        document.addEventListener("mousedown", handleOutsideClick);

        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, []);

    useEffect(() => {
        if (initialLoad) {
            // Sadece sayfa ilk yüklendiğinde çalışacak olan kısım
            setInitialLoad(true);
        }
    }, [initialLoad, lessonName]);

    // lessonName'ı bağımlılık listesine ekledik
    useEffect(() => {
        onLessonNameChange(lessonName);
    }, [lessonName, onLessonNameChange]);

    return (
        <Row>
            <Col>
                <iframe
                    title="Lesson Video"
                    width="100%"
                    height="315"
                    src={videoUrl}
                    frameBorder="0"
                    allowFullScreen
                ></iframe>

                <Container style={{
                    backgroundColor: 'white',
                    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                    padding: '20px',
                    borderRadius: '8px',
                    margin: '20px auto',
                }}>
                    <div style={{ marginTop: "10px", fontSize: "1.2rem", fontWeight: "bold" }}>
                        {lessonName && `${lessonName}`}
                    </div>

                    {/* Detail Button */}
                    <Button onClick={() => setShowOffcanvas(true)} style={{ marginTop: "10px" }}>
                        Detay
                    </Button>

                    {/* Offcanvas */}
                    <Offcanvas
                        show={showOffcanvas}
                        onHide={() => setShowOffcanvas(false)}
                        placement="end"
                        style={{
                            width: "100%",
                            maxWidth: "50%",
                            transition: " 0.4s ease",

                        }}  >
                        <Offcanvas.Header
                            style={{
                                backgroundColor: "#333",
                                color: "#fff",
                            }} >
                            <Offcanvas.Title>Detail</Offcanvas.Title>
                            <Button variant="link" onClick={() => setShowOffcanvas(false)}>
                                <BsX size={30} />
                            </Button>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            {lessonName && <p>{lessonName}</p>}
                            <AboutComponent />
                        </Offcanvas.Body>
                    </Offcanvas>

                </Container>
            </Col>
        </Row>
    );
};

export default VideoComponent;
