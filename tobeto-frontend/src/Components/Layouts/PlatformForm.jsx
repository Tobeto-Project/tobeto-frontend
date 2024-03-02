import React, { useEffect, useState } from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import userphoto from "../../Assets/Images/user-photo.png";
import {
  fetchCitiesByCountry,
  fetchCountries,
  fetchTownsByCity,
} from "../../Services/LocationService";
import { updateUserDetails } from "../../Services/UserService";
import { toast, ToastContainer } from 'react-toastify';

const PlatformForm = () => {
  const userDetailsRedux = useSelector((state) => state.auth.userDetails);

  // Local state'ler
  const [userDetails, setUserDetails] = useState({
    id: userDetailsRedux.id || "",
    firstName: "",
    lastname: "",
    phoneNumber: "",
    email: "",
    identityNumber: "",
    aboutMe: "",
    birthDate: "",
    description: "",
  });

  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");

  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");

  const [towns, setTowns] = useState([]);
  const [selectedTown, setSelectedTown] = useState("");

  useEffect(() => {
    fetchCountries().then(setCountries);
    // Redux'dan gelen userDetails'i local state'e kopyala
    setUserDetails({
      ...userDetails,
      firstName: userDetailsRedux.firstName || "",
      lastname: userDetailsRedux.lastname || "",
      phoneNumber: userDetailsRedux.phoneNumber || "",
      email: userDetailsRedux.email || "",
      identityNumber: userDetailsRedux.identityNumber || "",
      aboutMe: userDetailsRedux.aboutMe || "",
      birthDate: userDetailsRedux.birthDate || "",
      description: userDetailsRedux.description || "",
    });
  }, [userDetailsRedux]);

  useEffect(() => {
    if (selectedCountry) {
      fetchCitiesByCountry(selectedCountry).then(setCities);
      setSelectedCity(""); // Şehir seçimini sıfırla
      setTowns([]); // İlçe listesini boşalt
    }
  }, [selectedCountry]);

  useEffect(() => {
    if (selectedCity) {
      fetchTownsByCity(selectedCity).then(setTowns);
    }
  }, [selectedCity]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    //tarihi formatladım
    const birthDateToSend = new Date(userDetails.birthDate).toISOString();

    const userData = {
      ...userDetails,
      birthDate: birthDateToSend, // Formatlanmış tarih
      countryId: selectedCountry,
      cityId: selectedCity,
      townId: selectedTown,
    };
    console.log("Gönderilen veri:", userData);

    try {
      await updateUserDetails(userData);
      console.log("Kullanıcı başarıyla güncellendi");
      toast.success("Başarıyla Güncellendi")
    } catch (error) {
      console.error("Kullanıcı güncellenirken bir hata oluştu", error);
      toast.error("Lütfen tüm alanların dolu olduğundan emin olun.")
    }
  };

  // Form alanlarını güncelleme için onChange handler'ları
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  return (
    <div>
      <Container>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <div className="my-3 d-flex justify-content-center align-items-center">
              <img
                src={userphoto}
                alt="Profil Resmi"
                style={{ width: "300px", height: "300px", borderRadius: "50%" }} // Profil resmi için stil
              />
            </div>
          </Form.Group>

          {/* Ad ve Soyad */}
          <Row className="mt-2">
            <Col>
              <Form.Group controlId="formFirstName">
                <Form.Label>Adınız</Form.Label>
                <Form.Control
                  type="text"
                  name="firstName"
                  value={userDetails.firstName}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="formLastName">
                <Form.Label>Soyadınız</Form.Label>
                <Form.Control
                  type="text"
                  name="lastname"
                  value={userDetails.lastname}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
          </Row>

          {/* Telefon ve Doğum Tarihi */}
          <Row className="mt-2">
            <Col>
              <Form.Group controlId="formPhone">
                <Form.Label>Telefon Numaranız</Form.Label>
                <Form.Control
                  type="tel"
                  name="phoneNumber"
                  value={userDetails.phoneNumber}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="formBirthDate">
                <Form.Label>Doğum Tarihi</Form.Label>
                <Form.Control
                  type="date"
                  name="birthDate"
                  value={userDetails.birthDate.split("T")[0]}                  
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
          </Row>

          {/* TC Kimlik No ve E-posta */}
          <Row className="mt-2">
            <Col>
              <Form.Group controlId="formTC">
                <Form.Label>TC Kimlik No</Form.Label>
                <Form.Control
                  type="text"
                  name="identityNumber"
                  value={userDetails.identityNumber}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="formEmail">
                <Form.Label>E-posta</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={userDetails.email}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
          </Row>

          {/* Ülke */}
          <Form.Group>
            <Form.Label>Ülke</Form.Label>
            <Form.Control
              as="select"
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
            >
              <option value="">Ülke Seçiniz</option>
              {countries.map((country) => (
                <option key={country.id} value={country.id}>
                  {country.name}
                </option>
              ))}
            </Form.Control>
          </Form.Group>

          {/* İl ve İlçe */}
          <Row className="mt-2">
            <Col>
              <Form.Group>
                <Form.Label>Şehir</Form.Label>
                <Form.Control
                  as="select"
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                  disabled={!selectedCountry}
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
            <Col>
              <Form.Group>
                <Form.Label>İlçe</Form.Label>
                <Form.Control
                  as="select"
                  value={selectedTown}
                  onChange={(e) => setSelectedTown(e.target.value)}
                  disabled={!selectedCity}
                >
                  <option value="">İlçe Seçiniz</option>
                  {towns.map((town) => (
                    <option key={town.id} value={town.id}>
                      {town.name}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>
            </Col>
          </Row>

          {/* Mahalle ve Sokak */}
          <Form.Group controlId="formDescription">
            <Form.Label>Açıklama</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="description"
              value={userDetails.description}
              onChange={handleChange}
            />
          </Form.Group>
          {/* Hakkında */}
          <Form.Group controlId="formAbout">
            <Form.Label>Hakkında</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="aboutMe"
              value={userDetails.aboutMe}
              onChange={handleChange}
            />
          </Form.Group>

          {/* Kaydet Butonu */}
          <Button variant="primary" type="submit" className="mt-2">
            Kaydet
          </Button>
        </Form>
        <ToastContainer/>
      </Container>
    </div>
  );
};

export default PlatformForm;
