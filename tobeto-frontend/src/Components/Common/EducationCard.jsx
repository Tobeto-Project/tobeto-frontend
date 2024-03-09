import React from 'react';
import { Card, Button } from 'react-bootstrap';

const EducationCard = ({ data }) => {
    console.log("educationcardata", data)

    return (
        <Card className="education-card">
            <Card.Img variant="top" src={data.EducationImage} />
            <Card.Body>
                <Card.Title>{data.EducationTitle}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                    {data.EducationDate} {data.EducationBroadcastTime}
                </Card.Subtitle>
                <Button href='/lms' variant="primary" className="btn-primary mt-2 text-white">
                    Eğitime Git
                </Button>
            </Card.Body>
        </Card>
    );
};

export default EducationCard;