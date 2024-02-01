import React from "react";
import Banner from "../Components/Layouts/Banner";
import Header from "../Components/Layouts/Header";
import Footer from "../Components/Layouts/Footer";
import InfiniteScrollAnimation from "../Components/Common/InfiniteScrollAnimation";

const BireylerIcin = () => {
  return (
    <div className="pages-content">
      <Banner />
      <Header />

      <div className="main-content">
          <InfiniteScrollAnimation/>
      </div>

      <Footer />
    </div>
  );
};
export default BireylerIcin