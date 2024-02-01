import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";

const TabComponent = () => {
    const data1 = [
        "Object Oriented Programming (OOP)",
        "Microsoft SQL Server Database",
        "HTML-CSS-SASS",
        "Javascript",
        "ASPNET Core MVC",
        "C# Programming",
    ];

    const data2 = [
        "Full Stack Developer",
        "Front End Developer",
        "Web & Mobile Developer",
        "Siber Güvenlik Uzmanı",
        "Veri Bilimi Uzmanı",
        "UI/UX Developer",
    ];

    const [buttonState, setButtonState] = useState({
        button1: { background: "black", hover: false },
        button2: { background: "white", hover: false },
    });

    const [activeButton, setActiveButton] = useState(null);
    const [currentData, setCurrentData] = useState(data1);
    const [isFadeInOut, setIsFadeInOut] = useState(false);

    const handleClick = (button) => {
        setButtonState((prev) => ({
            button1: { background: button === "button1" ? "white" : "#181717", hover: false },
            button2: { background: button === "button2" ? "white" : "#181717", hover: false },
        }));

        setActiveButton(button);
        setIsFadeInOut(true);
        setCurrentData(button === "button1" ? data1 : data2);

        setTimeout(() => {
            setIsFadeInOut(false);
        }, 500);
    };

    const handleMouseEnter = (buttonIndex) => {
        if (activeButton && activeButton !== buttonIndex) {
            setButtonState((prev) => ({ ...prev, [buttonIndex]: { ...prev[buttonIndex], hover: true } }));
        }
    };

    const handleMouseLeave = (buttonIndex) => {
        setButtonState((prev) => ({ ...prev, [buttonIndex]: { ...prev[buttonIndex], hover: false } }));
    };

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsFadeInOut(false);
        }, 200);

        return () => clearTimeout(timeout);
    }, [activeButton]);

    const buttonStyle = (button, buttonIndex) => ({
        width: "25rem",
        height: "12rem",
        borderRadius: "10px",
        background: buttonState[button].background,
        color: buttonState[button].background === "white" ? "black" : "white",
        transition: "background 0.3s linear, color 0.3s ease, border 0.3s ease",
        border: activeButton !== buttonIndex && buttonState[buttonIndex].hover ? "2px solid white" : "2px solid #181717",
        marginBottom: "10px",
        cursor: "pointer",
    });

    return (
        <Row>
            <Col lg={5} xs={12}>
                <h3 className="text-white mt-5 fw-bold fs-2">Hangi Konuda Kendini Geliştirmek İstersin?</h3>
                <div>
                    <button
                        className="mt-5"
                        style={buttonStyle("button1", "button1")}
                        onClick={() => handleClick("button1")}
                        onMouseEnter={() => handleMouseEnter("button1")}
                        onMouseLeave={() => handleMouseLeave("button1")}
                    >
                        <div>
                            <h3> Teknik ve Profesyonel Eğitimler</h3>
                        </div>
                        <div className="desc">
                            Kapsamlı beceri setlerinden, gelişmek istediğin konuyu seç, kariyerinde bir adım öne geç.
                        </div>
                    </button>
                    <button
                        className="mt-3"
                        style={buttonStyle("button2", "button2")}
                        onClick={() => handleClick("button2")}
                        onMouseEnter={() => handleMouseEnter("button2")}
                        onMouseLeave={() => handleMouseLeave("button2")}
                    >
                        <div>
                            <h3>Yeni bir meslek</h3>
                        </div>
                        <div className="desc">
                            İhtiyaç duyduğun kapsamlı beceri setlerinden oluşan eğitim yolculuğunu seç, yazılım veya profesyonel iş alanlarında tercih ettiğin yeni mesleğine doğru ilk adımını at.
                        </div>
                    </button>
                </div>
            </Col>
            <Col>
                <div className={`${isFadeInOut ? 'fadeInOut' : ''}`} aria-labelledby="v-pills-home-tab">
                    <div className="custom-container" style={{ backgroundColor: "grey", padding: "20px", borderRadius: "10px" }}>
                        <Row className="justify-content-between">
                            {currentData.map((item, index) => (
                                <Col key={index} lg={6} md={6} sm={12} xs={12} className="mb-3 ">
                                    <div className="tabs-box position-relative d-flex align-items-center justify-content-center px-3" style={{ backgroundColor: "white", color: "#000", textDecoration: "none", width: "100%", height: "200px", borderRadius: "10px" }}>
                                        {item}
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </div>
                </div>
            </Col>
        </Row>
    );
};

export default TabComponent;
