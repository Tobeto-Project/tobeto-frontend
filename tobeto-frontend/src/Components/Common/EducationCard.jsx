// EducationCard.js
import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';

const EducationCard = ({ data, setEducationTitle }) => {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        setEducationTitle(data.EducationTitle);
        navigate('/lms');
    };

    return (
        <Card className="education-card">
            <Card.Img variant="top" src={data.EducationImage} />
            <Card.Body>
                <Card.Title>{data.EducationTitle}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                    {data.EducationDate} {data.EducationBroadcastTime}
                </Card.Subtitle>
                <Button onClick={handleButtonClick} variant="primary" className="btn-primary mt-2 text-white">
                    Eğitime Git
                </Button>
            </Card.Body>
        </Card>
    );
};

const mapDispatchToProps = (dispatch) => ({
    setEducationTitle: (title) => dispatch({ type: 'SET_EDUCATION_TITLE', payload: title }),
});

export default connect(null, mapDispatchToProps)(EducationCard);
