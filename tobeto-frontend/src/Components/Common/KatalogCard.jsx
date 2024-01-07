import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import "../../Styles/CommonStyles/KatalogCardStyle.css";
import { getEducationData } from "../../Services/CourseService";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const KatalogCard = () => {
    const [educationList, setEducationList] = useState([]);
    const { isLoggedIn } = useSelector(state => state.auth);
    const navigate = useNavigate();

    const handleCardClick = () => {
      if(isLoggedIn){
        navigate('/kurs');
      }else{
        navigate('/girisyap')
      }
    }

    useEffect(() => {
        getEducationData().then(data =>{
            setEducationList(data);
        });
    },[])

return (
    <>
    <div className="card-container">
      {educationList.map((data) => (
        <Card className="education-card" key={data.id} onClick={handleCardClick}>
          <Card.Img variant="top" src={data.image} />
          <div className="card-info">
            <div className="card-text">
              <h5>{data.teacher}</h5>
              <p>{data.duration}</p>
            </div>
            <h4>{data.subject}</h4>
          </div>
        </Card>
      ))}
    </div>
    </>
  );
};

export default KatalogCard;
