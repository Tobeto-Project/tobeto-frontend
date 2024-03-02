import React, { useEffect, useState } from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import {
  fetchCitiesByCountry,
  fetchCountries,
} from "../../Services/LocationService";
import { addExperience } from "../../Services/ExperienceService";

const PlatformExperiences = () => {
  const userDetails = useSelector((state) => state.auth.userDetails);
  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [position, setPosition] = useState("");
  const [sector, setSector] = useState("");
  const [description, setDescription] = useState("");
  const [jobStart, setJobStart] = useState('');
  const [jobCompletion, setJobCompletion] = useState('');
  const [isCurrentJob, setIsCurrentJob] = useState(false);
  
  useEffect(() => {
    fetchCountries().then(setCountries);
  }, []);

  useEffect(() => {
    if (selectedCountry) {
      fetchCitiesByCountry(selectedCountry).then(setCities);
    } else {
      setCities([]);
    }
  }, [selectedCountry]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const jobStartIso = new Date(jobStart).toISOString();
    const jobCompletionIso = isCurrentJob
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
      jobCompletion: jobCompletionIso
    };
    console.log("Gönderilecek veri:", experienceData);

    try {
      await addExperience(experienceData);
      console.log("Deneyim başarıyla eklendi");
    } catch (error) {
      console.error("Deneyim eklenirken hata oluştu", error);
    }
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
          {/* Sektör ve Şehir */}
          <Row className="mt-2">
            <Col>
              <Form.Group controlId="formCountry">
                <Form.Label>Ülke Seçiniz*</Form.Label>
                <Form.Control
                  as="select"
                  value={selectedCountry}
                  onChange={(e) => setSelectedCountry(e.target.value)}
                  required
                >
                  <option value="">Ülke Seçiniz</option>
                  {countries.map((country) => (
                    <option key={country.id} value={country.id}>
                      {country.name}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>
            </Col>

            <Col>
              <Form.Group controlId="formCity">
                <Form.Label>Şehir Seçiniz*</Form.Label>
                <Form.Control
                  as="select"
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                  required
                >
                  <option value="">İl Seçiniz</option>
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
      </Container>
    </div>
  );
};

export default PlatformExperiences;
