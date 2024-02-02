import React, { useState, useEffect } from 'react';
import PlatformHeader from '../../Components/Layouts/PlatformHeader';
import MiddleBanner from '../../Components/Common/MiddleBanner';
import { getEducationData } from '../../Services/EducationService';
import { Card, Button, Row, Col, Container } from "react-bootstrap";
import EducationCard from '../../Components/Common/EducationCard';
import PlatformFooter from '../../Components/Layouts/PlatformFooter';

const MyEducation = () => {
  const [educationList, setEducationList] = useState([]);

  useEffect(() => {
    getEducationData().then((data) => {
      setEducationList(data);
    });
  }, []);

  return (
    <>
      <PlatformHeader />
      <MiddleBanner>
        <p style={{ fontSize: '6rem' }} className='text-white fw-bold'>Eğitimlerim</p>
      </MiddleBanner>
      <Container className='my-5'>
        <Row xs={1} md={2} lg={4} className="g-1">
          {educationList.map((data) => (
            <Col key={data.id}>
              <EducationCard data={data} />
            </Col>
          ))}
        </Row>
      </Container>
      <PlatformFooter />
    </>
  );
}

export default MyEducation;
