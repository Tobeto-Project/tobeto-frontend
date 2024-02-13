import React from 'react';
import { Row, Col } from 'react-bootstrap'; // Eğer react-bootstrap kullanıyorsanız
import LmsBar from '../components/LmsBar';

const LmsPage = () => {
  return (
    <>
      <Row>
        <Col><LmsBar/></Col>
      </Row>
      <Row>
        <Col md={5}></Col>
        <Col md={7}></Col>
      </Row>
    </>
  );
};

export default LmsPage;
