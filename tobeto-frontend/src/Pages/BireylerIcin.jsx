import React from "react";
import Banner from "../Components/Layouts/Banner";
import Header from "../Components/Layouts/Header";
import Footer from "../Components/Layouts/Footer";
import InfiniteScrollAnimation from "../Components/Common/InfiniteScrollAnimation";
import CardImage from "../Components/Common/NelerSunuyoruz/Kurumlaricin/CardImage";
import CareerControl from "../Components/Common/NelerSunuyoruz/Bireylericin/CareerControl";
import { gradientBarStyleBottomToTop, gradientBarStyleTopToBottom } from "../Pages/BizKimiz"
import { Row,Col, Container } from "react-bootstrap";
import SkillTable from "../Components/Common/NelerSunuyoruz/Bireylericin/SkillTable";
import JobTable from "../Components/Common/NelerSunuyoruz/Bireylericin/JobTable";
import ProgramList from "../Components/Common/NelerSunuyoruz/Bireylericin/ProgramList";
import CalendarButton from "../Components/Common/CalendarButton";


const BireylerIcin = () => {
  return (
    <div className="pages-content">
      <Banner />
      <Header />
      <CalendarButton/>

      <div className="main-content" style={{  marginTop: "130px" }}>
        <CardImage />
    
        <CareerControl />

        <Row>
          <div style={gradientBarStyleTopToBottom} className="mx-auto mt-5 mb-5"></div>
        </Row>

        <SkillTable />

        <Row>
          <div style={gradientBarStyleBottomToTop} className="mx-auto mt-5 mb-5">

          </div>
        </Row>

        <JobTable />


        <Row>
          <div style={gradientBarStyleTopToBottom} className="mx-auto mt-5 mb-5">

          </div>
        </Row>

        <ProgramList />

        <Row>
          <div style={gradientBarStyleTopToBottom} className="mx-auto mt-5 mb-5">

          </div>
        </Row>

        <Row className="custom-container mb-3" style={{ backgroundColor: "#181717", padding: "20px", margin: "auto" }}>
          <Col lg={11} className="d-flex justify-content-center align-items-center">
            <div>
              <h1 className="text-white mb-4">Kendimi geliştirmek istiyorum</h1>
            </div>
          </Col>
          <Col lg={1} >
            <img src="https://tobeto.s3.cloud.ngn.com.tr/dot_gray_8a5a605556_eb3dd4f77d.svg" alt="Your Alt Text" style={{ width: "100px", height: "100px" }} />
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
             <InfiniteScrollAnimation />
          </Col>
        </Row>
        
      </div>

      <Footer />
    </div>
  );
};
export default BireylerIcin