import React, { useState, useEffect } from 'react';
import { SlArrowRight } from 'react-icons/sl';
import { Card, Button, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { mapCourseToEducationData } from '../../Services/EducationService'; // mapCourseToEducationData fonksiyonunu import ediyoruz
import '../../Styles/CommonStyles/EducationCardStyles.css';
import EducationCard from './EducationCard';

const PlatformEducationCard = ({ setEducationTitle, setCourseModules }) => {
  const [educationList, setEducationList] = useState([]);
  const navigate = useNavigate();

  const handleMoreClick = async () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    await new Promise((resolve) => setTimeout(resolve, 1000));
    navigate('/egitimlerim');
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const educationData = await mapCourseToEducationData(); // Kurs verilerini almak için mapCourseToEducationData fonksiyonunu kullanıyoruz
        setEducationList(educationData);
        // Burada kurs modüllerini de Redux store'a gönderiyoruz
        const modules = educationData.flatMap((edu) => edu.courseModules);
        setCourseModules(modules);
      } catch (error) {
        console.error('Error fetching education data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Row xs={1} md={2} lg={4} className="g-4">
        {educationList.slice(0, 4).map((data) => (
          <Col key={data.id}>
            <EducationCard data={data} setEducationTitle={setEducationTitle} />
          </Col>
        ))}
      </Row>
      <Row className="mt-4 justify-content-center">
        <Col xs={12} className="text-center">
          <Button
            onClick={handleMoreClick}
            variant="shadow-lg"
            className="rounded-circle shadow-sm"
            style={{ width: '50px', height: '50px', padding: 0 }}
          >
            <SlArrowRight className="fs-3 ms-1" />
          </Button>
          <div className="mt-2">Daha Fazla Göster</div>
        </Col>
      </Row>
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setEducationTitle: (title) => dispatch({ type: 'SET_EDUCATION_TITLE', payload: title }),
  setCourseModules: (modules) => dispatch({ type: 'SET_COURSE_MODULES', payload: modules }),
});

export default connect(null, mapDispatchToProps)(PlatformEducationCard);
