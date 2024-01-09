import React from "react";
import Banner from "../Components/Layouts/Banner";
import Header from "../Components/Layouts/Header";
import Footer from "../Components/Layouts/Footer";

const BizKimiz = () => {
  return (
    <div className="bg-dark body-container bg-dark">
      <Banner />
      <Header />

      <div className="main-content">
        <h1>Biz Kimiz ?</h1>

      </div>

      <Footer />
    </div>
  );
};

export default BizKimiz;
