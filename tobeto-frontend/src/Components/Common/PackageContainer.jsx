import React from "react";
import "../../Styles/CommonStyles/PackageContainer.css";


const PackageCard = ({ title, buttonText, backgroundColor }) => {
    const cardStyle = {
        backgroundColor: backgroundColor,
    };

    return (
        <div className="package-card" style={cardStyle}>
            <div className="details">
                <h1 style={{fontSize:"20px", fontWeight:"bold"}}>{title}</h1>
                <button className="btn btn-primary " >{buttonText}</button>
            </div>
        </div>
    );
};

const PackageContainer = () => {
    return (
        <div className="container">
            <div className="new-packs my-5 d-flex justify-content-between text-white  ">
                <PackageCard title="Profilini oluştur" buttonText="Başla" />
                <PackageCard title="Kendini değerlendir" buttonText="Başla" />
                <PackageCard title="Öğrenmeye başla" buttonText="Başla" />
            </div>
        </div>
    );
};

export default PackageContainer;
