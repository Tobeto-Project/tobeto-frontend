import React from "react";
import "../../Styles/CommonStyles/PackageContainer.css";
import { Navigate, useNavigate } from "react-router-dom";

const PackageCard = ({ title, buttonText, backgroundColor,onClick }) => {
  const cardStyle = {
    backgroundColor: backgroundColor,
  };

  return (
    <div className="package-card" style={cardStyle}>
      <div className="details">
        <h1 style={{ fontSize: "20px", fontWeight: "bold" }}>{title}</h1>
        <button className="btn btn-primary "  onClick={onClick}>{buttonText}</button>
      </div>
    </div>
  );
};

const PackageContainer = () => {
    const navigate = useNavigate();
    
    const handleClickCreateProfile = () => {
      navigate("/kisiselbilgiler");
    };
  
    return (
      <div className="container">
        <div className="new-packs my-5 d-flex justify-content-between text-white">
          <PackageCard
            onClick={handleClickCreateProfile}
            title="Profilini oluştur"
            buttonText="Başla"
          />
          <PackageCard title="Kendini değerlendir" buttonText="Başla" />
          <PackageCard title="Öğrenmeye başla" buttonText="Başla" />
        </div>
      </div>
    );
  };
export default PackageContainer;
