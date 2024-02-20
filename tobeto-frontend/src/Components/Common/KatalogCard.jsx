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
                style={{ position: "relative", width: "90%" }}
              >
                <Card.Img variant="top" src={data.image} />
                <div className="card-info">
                  <Row>
                    <Col xs={12} md={6}>
                      <div className="card-text">
                        <h5 style={{ fontSize: "1rem" }}>{data.teacher}</h5>
                      </div>
                    </Col>
                    <Col xs={12} md={6}>
                      <div className="card-text">
                        <p style={{ fontSize: "1rem" }}>{data.duration}</p>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                  
                      <h4 style={{ fontSize: "1rem" }}>{data.subject}</h4>
                   
                  </Row>
                </div>
                {/* Yeni eklenen bölüm */}
                <div
                  style={{
                    position: "absolute",
                    bottom: "0",
                    left: "0",
                    width: "100%",
                    backgroundColor: "#f8f9fa",
                    padding: "10px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    alignItems: "center",
                    height: "70px",  // Sabit yükseklik değeri
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <BsPeople style={{ marginRight: "0.5rem" }} />
                    <span>{data.teacher}</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <BsClock style={{ marginRight: "0.5rem" }} />
                    <span>{data.duration}</span>
                  </div>
                  <div style={{ textAlign: "center" }}>{data.subject}</div>
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
