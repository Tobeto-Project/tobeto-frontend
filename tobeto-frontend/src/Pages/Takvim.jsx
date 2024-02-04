import React from "react";
import Banner from "../Components/Layouts/Banner";
import Header from "../Components/Layouts/Header";
import Footer from "../Components/Layouts/Footer";
import { Col, Container, Row } from 'react-bootstrap'
import CalendarSidebar from '../Components/Layouts/CalendarSidebar.jsx'
import Calendar from '../Components/Layouts/Calendar.jsx'

const Takvim = () => {
  return (
    <div className="body-container pages-content">
      <Banner />
      <Header />
       <Row style={{marginTop:"8rem"}}>
          <Col lg={3}><CalendarSidebar/></Col>
          <Col lg={9} className='p-0 m-0'><Calendar/></Col>
        </Row>
      <Footer />
    </div>
  );
};
export default Takvim