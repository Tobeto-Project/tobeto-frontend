import React from "react";
import "../../Styles/CommonStyles/PackageContainer.css";
import { Link } from "react-router-dom";

const PackageCard = ({ title, buttonText, backgroundColor }) => {
  const cardStyle = {
    backgroundColor: backgroundColor,
  };

  return (
    <div className="package-card" style={cardStyle}>
      <div className="details">
        <h1 style={{ fontSize: "20px", fontWeight: "bold" }}>{title}</h1>
        <button className="btn btn-primary ">{buttonText}</button>
      </div>
    </div>
  );
};

const PackageContainer = () => {
    
  
    return (
      <div className="container">
        <div className="new-packs my-5 d-flex justify-content-between">
          <Link to={"/kisiselbilgiler"} className="text-white"><PackageCard
            title="Profilini oluştur"
            buttonText="Başla"
          /></Link>
          <Link to={"/degerlendirmeler"} className="text-white"><PackageCard title="Kendini değerlendir" buttonText="Başla" /></Link>
          <Link to={"/platform-egitimler"} className="text-white"><PackageCard title="Öğrenmeye başla" buttonText="Başla" /></Link>
        </div>
      </div>
    );
  };
export default PackageContainer;
