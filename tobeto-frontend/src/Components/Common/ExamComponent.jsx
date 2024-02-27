import React, { useState } from "react";
import { Modal, Button, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { MdOutlineTimer } from "react-icons/md";
import "../../Styles/CommonStyles/ExamComponent.css";

const ExamCard = ({ examName, lessonName, examTime, examType, status, onClick }) => {
    const statusClass = status ? `status-${status.toLowerCase()}` : '';

    return (

        <div
            className={`exam-card ${statusClass}`}
            onClick={onClick}
            style={{
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
                width: "480px",
                height: "95%",
                padding: "10px",
                borderRadius: "10px", cursor: "pointer",
                transition: "transform 0.3s ease",


            }}
        >
            <Row sm={10}>
                <div className="exam-header ">
                    <span style={{ marginRight: "40px" }} className="exam-name fw-bold">
                        {examName}
                    </span>
                    <span
                        className="status-icon"
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: "20px",
                            height: "20px",
                            borderRadius: "5px",
                            background: "#7348BF",
                            marginRight: "5px",
                            marginTop: "5px",
                            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                            float: "right"
                        }}
                    >
                        <FontAwesomeIcon icon={faCheck} style={{ color: "#FFF" }} />
                    </span>
                    <span className="lesson-name d-block text-muted mt-2">{lessonName}</span>
                </div>
                <div className="exam-details mt-2">
                    <div>
                        <MdOutlineTimer style={{
                            width: "20px",
                            height: "20px",
                            color: "#A54BFF"
                        }} />
                        <span className="exam-time fw-bold mx-1">{examTime}</span>
                    </div>
                    <div>
                        <span className="exam-type">{examType}</span>
                    </div>
                </div>
            </Row>


        </div>
    );
};

const ExamList = () => {
    const [showModal, setShowModal] = useState(false);

    const handleShowModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <div className="row ">
            <div className=" position-relative">
                <span className="fw-bold">Sınavlarım</span>
            </div>
            <div className="exams my-3">
                <Row className="mx-1">
                    <ExamCard
                        examName="Herkes için Kodlama 2A Değerlendirme Sınavı"
                        lessonName="Herkes İçin Kodlama - 2A"
                        examTime="45 Dakika"
                        onClick={handleShowModal}
                    />
                </Row>


            </div>
            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>

                    <span className=" fw-bold">
                        Herkes için Kodlama 2A Değerlendirme Sınavı
                    </span>

                </Modal.Header>

                <Modal.Body>

                    <div className="quiz-screen">

                        <span>
                            Sevgili Adayımız,

                            Herkes için Kodlama Eğitimi'ni tamamladığınız için tebrik ederiz. Bu eğitim sonrası bir sonraki aşamaya geçiş için 25 sorudan oluşan bir değerlendirme sınavımız bulunmaktadır.

                            Bu test her kullanıcı için sadece 1 kez sunulmakta olup 45 dakika içinde tamamlanması gerekmektedir.



                            Tüm değerlendirme kriterleri sonrası Mesleki Gelişim Eğitimlerine geçişiniz ile ilgili bilgilendirileceksiniz.



                            Sevgiler,

                            TOBETO
                        </span>
                        <ExamCard examTime="45 Dakika" examType="Çoktan Seçmeli" />
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export { ExamCard, ExamList };
