import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { SlCalender } from "react-icons/sl";

const CustomModal = ({ show, handleClose, title, content }) => {
    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton= {true}>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{content}</Modal.Body>
            <Modal.Footer>
          
            </Modal.Footer>
        </Modal>
    );
};

export default CustomModal