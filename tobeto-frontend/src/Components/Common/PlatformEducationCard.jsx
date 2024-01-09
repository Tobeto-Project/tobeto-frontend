import React, { useState, useEffect } from "react";
import { Card, Button, Row, Col } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { getEducationData } from '../../Services/EducationService';
import '../../Styles/CommonStyles/EducationCardStyles.css'

const PlatformEducationCard = () => {
    const [educationList, setEducationList] = useState([]);
    const navigate = useNavigate();

    const handleCardClick = () => {
      navigate('/kurs')
    }

    useEffect(() => {
      getEducationData().then(data =>{
        setEducationList(data);
      });
    },[])
  
    return (
      <Row xs={1} md={2} lg={4} className="g-4">
        {educationList.map((data) => (
          <Col key={data.id}>
            <Card className="education-card "> 
              <Card.Img variant="top" src={data.EducationImage} />
              <Card.Body>
                <Card.Title>{data.EducationTitle}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {data.EducationDate} {data.EducationBroadcastTime}
                </Card.Subtitle>
                <Button variant="primary" className="btn-primary mt-2" onClick={handleCardClick}>
                  Eğitime Git
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    );
};

export default PlatformEducationCard;
