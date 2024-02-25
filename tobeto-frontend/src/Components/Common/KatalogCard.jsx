import React, { useState, useEffect } from "react";
import { Card, Row, Col } from "react-bootstrap";
import { BsPeople, BsClock } from "react-icons/bs"; // Eklediğimiz ikonlar
import "../../Styles/CommonStyles/KatalogCardStyle.css";
import { getCourseData } from "../../Services/CourseService";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const KatalogCard = () => {
  const [courseList, setCourseList] = useState([]);
  const { isLoggedIn } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

 
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };


  const handleCardClick = () => {
    if (isLoggedIn) {
      navigate("/kurs");
    } else {
      navigate("/girisyap");
    }
  };

  useEffect(() => {
    getCourseData().then((data) => {
      setCourseList(data);
    });
  }, []);

  const filteredCourses = courseList.filter(course =>
    course.teacher.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="card-container">
        <Row xs={1} md={2} lg={3} xl={3} className="g-4">
          {filteredCourses.map((data) => (
            <Col key={data.id}>
              <Card
                className="education-card"
                onClick={handleCardClick}
                style={{ width: "90%" ,height:'260px'}}
              >
                <Card.Img variant="top" src={data.image} />
                <div className="card-info">
                  <Row>
                    <Col xs={12} md={6}>
                      <div className="card-text">
                        <h5 style={{ fontSize: "12px" }}><BsPeople style={{ marginRight: "0.5rem" }} />{data.teacher}</h5>
                      </div>
                    </Col>
                    <Col xs={12} md={6}>
                      <div className="card-text">
                        <p style={{ fontSize: "12px" }}> <BsClock style={{ marginRight: "0.5rem" }} />{data.duration}</p>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                  
                      <h4>{data.subject}</h4>
                   
                  </Row>
                </div>
            
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
};

export default KatalogCard;
