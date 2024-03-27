import React, { useState, useEffect } from "react";
import { Col, Row, Offcanvas, Button, Container } from "react-bootstrap";
import AboutComponent from "./AboutComponent";
import { BsX } from "react-icons/bs";
import ReactPlayer from "react-player";

const VideoComponent = ({ lesson }) => {
    const [showOffcanvas, setShowOffcanvas] = useState(false);
    const [initialLoad, setInitialLoad] = useState(true);

    useEffect(() => {
        const handleOutsideClick = (e) => {
            console.log("Outside click detected.");
            console.log("Iframe data:", lesson && lesson.video);
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
            setInitialLoad(false);
        }
    }, [initialLoad]);

    if (!lesson) {
        return null;
    }

    return (
        <Row>
            <Col>
                <div style={{ borderRadius: "25px", overflow: "hidden" }}>
                    <ReactPlayer
                        url={`${lesson.video}`}
                        controls
                        width="100%"
                        height="450px"
                        style={{ maxWidth: "100%" }}
                        config={{
                            youtube: {
                                playerVars: {
                                    controls: 1,
                                    disablekb: 0,
                                    fs: 1,
                                    iv_load_policy: 3,
                                    modestbranding: 1,
                                    rel: 0,
                                    showinfo: 0,
                                    color: 'white', // Kontrol düğmelerinin rengi
                                    disablekb: 0, // Klavye kontrolünü etkinleştir
                                    cc_load_policy: 0,
                                    start: 0,
                                    end: 0,
                                    loop: 0,
                                }
                            }
                        }}
                    />
                </div>





                <Container style={{
                    backgroundColor: 'white',
                    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                    padding: '20px',
                    borderRadius: '8px',
                    margin: '20px auto',
                }}>
                    <div style={{ marginTop: "10px", fontSize: "1.2rem", fontWeight: "bold" }}>
                        {lesson.name}
                    </div>

                    <Button onClick={() => setShowOffcanvas(true)} style={{ marginTop: "10px" }}>
                        Detay
                    </Button>

                    <Offcanvas
                        show={showOffcanvas}
                        onHide={() => setShowOffcanvas(false)}
                        placement="end"
                        style={{
                            width: "100%",
                            maxWidth: "50%",
                            transition: "0.4s ease",
                        }}
                    >
                        <Offcanvas.Header
                            style={{
                                backgroundColor: "#333",
                                color: "#fff",
                            }}
                        >
                            <Offcanvas.Title>Detay</Offcanvas.Title>
                            <Button variant="link" onClick={() => setShowOffcanvas(false)}>
                                <BsX size={30} />
                            </Button>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <p>{lesson.name}</p>
                            <AboutComponent />
                        </Offcanvas.Body>
                    </Offcanvas>
                </Container>
            </Col>
        </Row>
    );
};

export default VideoComponent;
