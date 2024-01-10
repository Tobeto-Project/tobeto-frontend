import React, { useState, useEffect } from "react";
import { SlArrowRight } from "react-icons/sl";

import { Card, Button, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { getEducationData } from "../../Services/EducationService";
import "../../Styles/CommonStyles/EducationCardStyles.css";

const PlatformEducationCard = () => {
  const [educationList, setEducationList] = useState([]);

  const navigate = useNavigate();

  const handleMoreClick = () => {
    navigate("/egitimlerim");
  };

  useEffect(() => {
    getEducationData().then((data) => {
      setEducationList(data);
    });
  }, []);

  return (
    <>
      <Row xs={1} md={2} lg={4} className="g-4">
        {educationList.slice(0, 4).map((data) => (
          <Col key={data.id}>
            <EducationCard data={data} />
          </Col>
        ))}
      </Row>
      <Row className="mt-4 justify-content-center">
        <Col xs={12} className="text-center">
          <Button
            onClick={handleMoreClick}
            variant="shadow-lg"
            className="rounded-circle shadow-sm"
            style={{ width: "50px", height: "50px", padding: 0 }}
          >
            <SlArrowRight className="fs-3 ms-1" />
          </Button>
          <div className="mt-2">Daha Fazla Göster</div>
        </Col>
      </Row>
    </>
  );
};

export default PlatformEducationCard;
