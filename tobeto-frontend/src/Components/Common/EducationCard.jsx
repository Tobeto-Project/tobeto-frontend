// EducationCard.js
import React from 'react';
import { Card, Button } from 'react-bootstrap';

const EducationCard = ({ data, onClick }) => {
    return (
        <Card className="education-card">
            <Card.Img variant="top" src={data.EducationImage} />
            <Card.Body>
                <Card.Title>{data.EducationTitle}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                    {data.EducationDate} {data.EducationBroadcastTime}
                </Card.Subtitle>
                <Button variant="primary" className="btn-primary mt-2 text-white" onClick={onClick}>
                    Eğitime Git
                </Button>
            </Card.Body>
        </Card>
    );
};

export default EducationCard;
