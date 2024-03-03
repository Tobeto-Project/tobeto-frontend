import React, { useEffect, useState } from "react";
import { Container, Form, Row, Col, Button, Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import {
  fetchCitiesByCountry,
  fetchCitiesByCountryTurkey,
  fetchCountries,
} from "../../Services/LocationService";
import {
  addExperience,
  getExperiencesByUser,
} from "../../Services/ExperienceService";
import { toast, ToastContainer } from "react-toastify";

const PlatformExperiences = () => {
  const userDetails = useSelector((state) => state.auth.userDetails);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [position, setPosition] = useState("");
  const [sector, setSector] = useState("");
  const [description, setDescription] = useState("");
  const [jobStart, setJobStart] = useState("");
  const [jobCompletion, setJobCompletion] = useState("");
  const [isCurrentJob, setIsCurrentJob] = useState(false);
  const [experiences, setExperiences] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [cities, setCities] = useState([]);

  useEffect(() => {
    fetchCitiesByCountryTurkey()
      .then((data) => {
        setCities(data.items || []);
      })
      .catch((error) => {
        console.error("Failed to fetch cities:", error);
      });
  }, []);

  const getCityNameById = (cityId) => {
    const city = cities.find((c) => c.id === cityId);
    return city ? city.name : "Bilinmeyen Şehir";
  };

  useEffect(() => {
    if (userDetails && userDetails.id) {
      setIsLoading(true);
      getExperiencesByUser(userDetails.id)
        .then((data) => {
          setExperiences(data.items); // Assuming the response has an 'items' array
          setIsLoading(false);
        })
        .catch((error) => {
          console.error("Failed to fetch experiences:", error);
          setIsLoading(false);
        });
    }
  }, [userDetails]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const jobStartIso = jobStart ? new Date(jobStart).toISOString() : null;
    const jobCompletionIso =
      isCurrentJob || !jobCompletion
        ? null
        : new Date(jobCompletion).toISOString();

    const experienceData = {
      userId: userDetails.id,
      cityId: selectedCity,
      companyName,
      positionName: position,
      sectorName: sector,
      description,
      jobStart: jobStartIso,
      jobCompletion: jobCompletionIso,
    };

    try {
      await addExperience(experienceData);
      toast.success("Deneyim başarıyla eklendi.");
      setIsLoading(true); // Optionally refresh experiences list
      getExperiencesByUser(userDetails.id)
        .then((data) => {
          setExperiences(data.items || []);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error("Failed to refresh experiences:", error);
          setIsLoading(false);
        });
    } catch (error) {
      console.error("Error adding experience:", error);
      toast.error("Deneyim eklenirken bir hata oluştu. Lütfen tekrar deneyin.");
    }
  };

  const refreshExperiences = () => {
    if (userDetails && userDetails.id) {
      setIsLoading(true);
      getExperiencesByUser(userDetails.id)
        .then((data) => {
          setExperiences(data.items || []); // Ensuring a fallback to an empty array
          setIsLoading(false);
        })
        .catch((error) => {
          console.error("Failed to fetch experiences:", error);
          setIsLoading(false);
        });
    }
  };

  useEffect(() => {
    refreshExperiences();
  }, [userDetails]);

  const renderExperiences = () => {
    if (isLoading) {
      return <div>Deneyimler yükleniyor...</div>;
    }

    if (experiences.length === 0) {
      return <div>Herhangi bir deneyim bulunamadı.</div>;
    }

    return experiences.map((experience) => (
      <Card key={experience.id} className="mb-2">
        <Card.Body>
          <Row><p style={{color:'rgba(153, 51, 255, 0.66)'}}>{experience.jobStart}-{experience.jobCompletion
            ? new Date(experience.jobCompletion).toLocaleDateString()
            : "Devam Ediyor"} </p>
          </Row>
          <Row>
            <Col><strong style={{color:'#828282'}}>Kurum Adı</strong></Col>
            <Col><strong style={{color:'#828282'}}>Pozisyon</strong></Col>
            <Col><strong style={{color:'#828282'}}>Sektör</strong></Col>
            <Col><strong style={{color:'#828282'}}>Şehir</strong></Col>
          </Row>
          <Row>
            <Col>{experience.companyName}</Col>
            <Col>{experience.positionName}</Col>
            <Col>{experience.sectorName}</Col>
            <Col>{getCityNameById(experience.cityId)}s</Col>
          </Row>
          <br/>
          <Card.Text>
            <strong style={{color:'#828282'}}>Açıklama:</strong> {experience.description}
          </Card.Text>
        </Card.Body>
      </Card>
    ));
  };


  return (
    <div>
      <Container>
        <Form onSubmit={handleSubmit}>
          {/* Ülke Seçimi */}
          <Row className="mt-2">
            <Col>
              <Form.Group controlId="formCompanyName">
                <Form.Label className="mb-0">Kurum Adı*</Form.Label>
                <Form.Control
                  type="text"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  required
                />
              </Form.Group>
            </Col>
          </Row>
          {/* Kurum Adı ve Pozisyon */}
          <Row className="mt-2">
            <Col>
              <Form.Group controlId="formSector">
                <Form.Label className="mb-0">Sektör*</Form.Label>
                <Form.Control
                  type="text"
                  value={sector}
                  onChange={(e) => setSector(e.target.value)}
                  required
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="formPosition">
                <Form.Label className="mb-0">Pozisyon*</Form.Label>
                <Form.Control
                  type="text"
                  value={position}
                  onChange={(e) => setPosition(e.target.value)}
                  required
                />
              </Form.Group>
            </Col>
          </Row>
          {/* Şehir Seçimi */}
          <Row className="mt-2">
            <Col>
              <Form.Group controlId="formCity">
                <Form.Label>Şehir Seçiniz*</Form.Label>
                <Form.Control
                  as="select"
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                  required
                >
                  <option value="">Şehir Seçiniz</option>
                  {cities.map((city) => (
                    <option key={city.id} value={city.id}>
                      {city.name}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>
            </Col>
          </Row>

          {/* İş Başlangıcı ve Bitişi */}
          <Row className="mt-2">
            <Col>
              <Form.Group controlId="formStartWork">
                <Form.Label className="mb-0">İş Başlangıcı*</Form.Label>
                <Form.Control
                  type="date"
                  value={jobStart}
                  onChange={(e) => setJobStart(e.target.value)}
                  required
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="formEndWork">
                <Form.Label className="mb-0">İş Bitiş*</Form.Label>
                <Form.Control
                  type="date"
                  value={jobCompletion}
                  onChange={(e) => setJobCompletion(e.target.value)}
                  disabled={isCurrentJob}
                  required
                />
                <Form.Check
                  type="checkbox"
                  label="Çalışmaya devam ediyorum."
                  className="mt-2"
                  onChange={(e) => setIsCurrentJob(e.target.checked)}
                  checked={isCurrentJob}
                />
              </Form.Group>
            </Col>
          </Row>
          {/* İş Açıklaması */}
          <Form.Group controlId="formDescription" className="mt-2">
            <Form.Label>İş Açıklaması</Form.Label>
            <Form.Control
              as="textarea"
              rows={5}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" type="submit" className="mt-2">
            Kaydet
          </Button>
        </Form>
        <Row className="mt-3">
          <Col>
            <h5>Deneyimlerim</h5>
            {renderExperiences()}
          </Col>
        </Row>
        <ToastContainer />
      </Container>
    </div>
  );
};

export default PlatformExperiences;
