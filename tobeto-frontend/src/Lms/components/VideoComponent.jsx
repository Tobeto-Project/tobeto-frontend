// VideoComponent.jsx

import React, { useState, useRef, useEffect } from "react";
import { Col, Container, Row, Offcanvas, Button } from "react-bootstrap";

const VideoComponent = ({ lessonName }) => {
    const videoUrl = "https://www.youtube.com/embed/your-video-id"; // Gerçek video URL'nizi kullanarak değiştirin
    const [showOffcanvas, setShowOffcanvas] = useState(false);
    const offcanvasRef = useRef(null);

    const handleToggleOffcanvas = () => {
        setShowOffcanvas(!showOffcanvas);
    };

    const handleCloseOffcanvas = () => {
        setShowOffcanvas(false);
    };

    useEffect(() => {
        const handleOutsideClick = (e) => {
            if (offcanvasRef.current && !offcanvasRef.current.contains(e.target)) {
                setShowOffcanvas(false);
            }
        };

        document.addEventListener("mousedown", handleOutsideClick);

        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, []);

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

                    {/* Detay Butonu */}
                    <Button onClick={handleToggleOffcanvas} style={{ marginTop: "10px" }}>
                        Detay
                    </Button>

                    {/* Offcanvas */}
                    <Offcanvas
                        show={showOffcanvas}
                        onHide={handleCloseOffcanvas}
                        placement="end"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title>Detay</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            {/* Canvas içeriği veya başka içerik buraya eklenir */}
                            {lessonName && <p>{lessonName}</p>}
                            Bu bir detay içeriği
                        </Offcanvas.Body>
                    </Offcanvas>
                </Container>
            </Col>
        </Row>
    );
};

export default VideoComponent;
