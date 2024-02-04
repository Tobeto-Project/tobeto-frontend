import React from "react";
import Banner from "../Components/Layouts/Banner";
import Header from "../Components/Layouts/Header";
import Footer from "../Components/Layouts/Footer";
import New from "../Components/Common/NelerSunuyoruz/Kurumlaricin/New"
import FeaturesFirst from "../Components/Common/NelerSunuyoruz/Kurumlaricin/FeaturesFirst";
import FeaturesSecond from "../Components/Common/NelerSunuyoruz/Kurumlaricin/FeaturesSecond";
import ContactSection from "../Components/Common/NelerSunuyoruz/Kurumlaricin/ContactSection";
import CardImage from "../Components/Common/NelerSunuyoruz/Kurumlaricin/CardImage";


const KurumlarIcin = () => {
  return (
    <div className="body-container pages-content">
      <Banner />
      <Header />


      <div className="main-content">
        <New />
        <FeaturesFirst />

        <FeaturesSecond />
        <ContactSection />
        <CardImage/>

      </div>

      <Footer />
    </div>
  );
};

export default KurumlarIcin