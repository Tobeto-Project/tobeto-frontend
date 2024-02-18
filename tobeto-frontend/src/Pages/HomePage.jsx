import React from "react";
import { Container, Row } from "react-bootstrap";
import Banner from "../Components/Layouts/Banner";
import Header from "../Components/Layouts/Header";
import Footer from "../Components/Layouts/Footer";
import "../Styles/PagesStyles/HomePageStyle.css";
import { gradientBarStyleTopToBottom } from "./BizKimiz";
import "../Styles/PagesStyles/HomePageStyle.css"
import CodeAcademy from "../Components/Common/HomePage/CodeAcademy";
import FluidAdvertising from "../Components/Common/HomePage/FluidAdvertising";
import TabComponent from "../Components/Common/HomePage/TabComponent";
import HeadfarmingComponent from "../Components/Common/HomePage/HeadfarmingComponent";
import SpiderInfoSection from "../Components/Common/HomePage/SpiderInfoSection";

import Accordions from "../Components/Common/HomePage/Accordions";
import CompanyList from "../Components/Common/HomePage/CompanyList";
import HomepageCards from "../Components/Common/HomePage/HomepageCards";
import CalendarButton from "../Components/Common/CalendarButton";



const HomePage = () => {

  return (
    <div className="body-container pages-content">
      <Banner />
      <Header />
      <CalendarButton/>

      <div className="main-content">
        <Container className="mt-4">
            <HomepageCards/>
        </Container>

        <Container>
          <Row>
            <div style={gradientBarStyleTopToBottom} className="mx-auto mt-5 mb-5"></div>
          </Row>
          <TabComponent />
        </Container>

        <Row className="m-auto text-end mt-5 mx-5 ">
          <a className="d-block  " href="/egitimler" class="tab-link mobile-mx-auto">Tümünü İncele &gt;</a>
        </Row>


        <CodeAcademy />

      </div>


      <FluidAdvertising />
      <HeadfarmingComponent />
      <SpiderInfoSection />
      <Accordions />
      <CompanyList />
      <Footer />
    </div>
  );
};

export default HomePage;
