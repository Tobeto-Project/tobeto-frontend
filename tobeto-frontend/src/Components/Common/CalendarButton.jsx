import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const CalendarButton = () => {
    const [isHovered, setIsHovered] = useState(false);
    const navigate = useNavigate(); // Initialize navigate from react-router-dom

    useEffect(() => {
        const handleResize = () => {
            // Update position based on window size
        };

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    const StyledButton = styled.button`
        position: fixed;
        bottom: 16px;
        left: 16px;
        z-index: 2;
        width: 72px;
        height: 72px;
        background-image: url(https://tobeto.com/_next/static/media/calendar.1477894f.gif);
        background-position: 50%;
        background-size: 144px 144px;
        border-radius: 72px;
        padding: 3px;
        cursor: pointer;
        transition: all 0.2s ease-in-out;

        ${isHovered &&
        `
          transform: scale(1.1);
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        `}
    `;

    const handleClick = () => {
        // Navigate to the "/Takvim" page when the button is clicked
        navigate("/Takvim");
    };

    return (
        <StyledButton
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick} // Add onClick event to handle button click
        />
    );
};

export default CalendarButton;
