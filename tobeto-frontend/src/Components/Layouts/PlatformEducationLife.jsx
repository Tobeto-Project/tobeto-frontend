import React, { useEffect, useState } from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { addUserEducation, deleteEducationById, getUserEducations } from "../../Services/UserEducationService";
import { FaTimesCircle } from 'react-icons/fa';
import { ToastContainer, toast } from "react-toastify";



const PlatformEducationLife = () => {
  const userDetails = useSelector((state) => state.auth.userDetails);

  const [education, setEducation] = useState({
    educationType: "",
    university: "",
    department: "",
    startDate: "",
    graduationDate: "",
  });
    const [educations, setEducations] = useState([]);
    const [isContinuing, setIsContinuing] = useState(false);

    useEffect(() => {
        fetchEducations();
    }, []);

    const fetchEducations = async () => {
        try {
            const response = await getUserEducations(userDetails.id);
            if (response && Array.isArray(response.items)) {
                setEducations(response.items);
                console.log("Eğitim bilgileri:", response.items); // 
            } else {
                setEducations([]);
            }
        } catch (error) {
            console.error("Eğitim bilgileri getirilirken bir hata oluştu", error);
            setEducations([]);
        }
    };
    

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEducation(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (educations.length >= 3) {
          toast.warn("En fazla 3 eğitim ekleyebilirsiniz.");
          return;
        }
    
        const educationData = {
          ...education,
          userId: userDetails.id,
          startDate: new Date(education.startDate).toISOString(),
          graduationDate: isContinuing ? null : new Date(education.graduationDate).toISOString(),
        };
    
        try {
          await addUserEducation(educationData);
          fetchEducations();
          toast.success("Eğitim bilgisi başarıyla eklendi");
        } catch (error) {
          console.error("Eğitim bilgisi eklenirken bir hata oluştu", error);
          toast.error("Eğitim bilgisi eklenirken bir hata oluştu");
        }
      };

  const handleDeleteEducation = async (educationId) => {
    try {
    
      await deleteEducationById(educationId);
      toast.success("Eğitim bilgisi başarıyla silindi");
      fetchEducations();
    
    } catch (error) {
      console.error("Eğitim bilgisi silinirken bir hata oluştu", error);
      toast.error("Eğitim bilgisi silinirken bir hata oluştu");
    }
  };

    

  return (
    <div>
      <Container>
        <Form onSubmit={handleSubmit}>
          <Row className="mt-2" style={{ marginBottom: "24px" }}>
            <Col>
              <Form.Group controlId="formEducationStatus">
                <Form.Label>Eğitim Durumu*</Form.Label>
                <Form.Select
                  name="educationType"
                  onChange={handleChange}
                  required
                >
                  <option value="">Seviye Seçiniz</option>
                  <option value="Lisans">Lisans</option>
                  <option value="Önlisans">Önlisans</option>
                  <option value="Yüksek Lisans">Yüksek Lisans</option>
                  <option value="Doktora">Doktora</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="formUniversity">
                <Form.Label>Üniversite*</Form.Label>
                <Form.Control
                  name="university"
                  type="text"
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className="mt-2" style={{ marginBottom: "24px" }}>
            <Col>
              <Form.Group controlId="formDepartment">
                <Form.Label>Bölüm*</Form.Label>
                <Form.Control
                  name="department"
                  type="text"
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="formStartYear">
                <Form.Label>Başlangıç Yılı*</Form.Label>
                <Form.Control
                  name="startDate"
                  type="date"
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className="mt-2" style={{ marginBottom: "24px" }}>
            <Col>
              <Form.Group controlId="formGraduate">
                <Form.Label>Mezuniyet Yılı*</Form.Label>
                <Form.Control
                  name="graduationDate"
                  type="date"
                  onChange={handleChange}
                  disabled={isContinuing}
                  required={!isContinuing}
                />
                <Form.Check
                  className="mt-2"
                  type="checkbox"
                  label="Devam ediyorum."
                  onChange={(e) => setIsContinuing(e.target.checked)}
                />
              </Form.Group>
            </Col>
          </Row>
          <Button variant="primary" type="submit" className="mt-2">
            Kaydet
          </Button>
        </Form>
            {/* Eğitim bilgilerini listeleme bölümü */}
            {educations.map((edu, index) => (
          <Container key={index} className="bg-light p-3 my-2 d-flex align-items-center justify-content-between">
            <Row className="flex-grow-1 align-items-center">
              <Col xs="auto" className="d-flex align-items-center">
                  <h3 style={{fontSize:"0.8rem",color:"#822BD9"}}>{edu.startDate.split('T')[0]} - {edu.graduationDate ? edu.graduationDate.split('T')[0] : "Devam Ediyor"}</h3>
              </Col>   
              <Col>
                  <p style={{fontSize:"0.8rem",color:"#822BD9"}} className="mt-2">{edu.educationType}</p>
              </Col> 
            </Row>
            <Row className="me-3">
                <Col>
                <h5 className="text-muted">Üniversite</h5>
                <p className="font-bold">{edu.university}</p>
                </Col>
            </Row>
            <Row className="me-2">
              <Col>
                <h5 className="text-muted">Bölüm</h5>
                <p>{edu.department}</p>
              </Col>
            </Row>
              <Col xs="auto" className="text-danger">
                  <Button variant="danger" onClick={() => handleDeleteEducation(edu.id)}>Eğitimi Sil</Button>

              </Col>
        
          </Container>
        ))}
      </Container>
      <ToastContainer/>
    </div>
  );
};

export default PlatformEducationLife;
