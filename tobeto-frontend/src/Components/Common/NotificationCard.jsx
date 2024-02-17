// NotificationCard.jsx

import React, { useState } from "react";
import { Card } from "react-bootstrap";
import "../../Styles/CommonStyles/NotificationCard.css"
import { SlCalender } from "react-icons/sl";
import CustomModal from "./CustomModal"

const NotificationCard = ({ type, corpName, header, date, content }) => {
    const [showModal, setShowModal] = useState(false);
    const handleShowModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);
      
    return (
        <Card className={`my-2 mx-3 notify ${type === "Duyuru" ? "duyuru" : ""}`}>
            <Card.Body>
                <div className="d-flex flex-column">
                    <div className="d-flex justify-content-between mb-2">
                        <span className="type">{type}</span>
                        <span className="corp-names type">{corpName}</span>
                    </div>
                    <span className="header">{header}</span>
                </div>
                <div className="d-flex justify-content-between mt-4 text-muted">
                    <span style={{ fontSize: "small" }} className="date">
                        <SlCalender style={{ marginRight: "10px", marginBottom: "5px", font: "small-caption" }} />
                        {date}
                    </span>
                    <span style={{ fontSize: "small", cursor: "pointer" }} className="read-more" onClick={handleShowModal}>
                        Devamını Oku
                    </span>
                </div>
            </Card.Body>
            <CustomModal
                show={showModal}
                handleClose={handleCloseModal}
                title={header}
                content={content}
            />
        </Card>
    );
};

export default NotificationCard;


