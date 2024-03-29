import React, { useState, useEffect } from 'react';
import PlatformHeader from '../../Components/Layouts/PlatformHeader';
import MiddleBanner from '../../Components/Common/MiddleBanner';
import { Row, Col, Container, Form, Dropdown, Alert } from "react-bootstrap";
import EducationCard from '../../Components/Common/EducationCard';
import PlatformFooter from '../../Components/Layouts/PlatformFooter';
import { handleSearch } from '../../Services/DynamicSearchService';
import { getEducationData } from '../../Services/EducationService';

const MyEducation = () => {
  const [educationList, setEducationList] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [showNoResultsMessage, setShowNoResultsMessage] = useState(false);

  useEffect(() => {
    getEducationData().then((data) => {
      setEducationList(data);
    });
  }, []);

  const handleSearchChange = (event) => {
    const searchText = event.target.value;
    setSearchText(searchText);
    console.log("Arama metni:", searchText); // Arama metnini konsola yazdır
    handleSearch(searchText)
      .then((response) => {
        console.log("Arama sonuçları:", response.items); // Arama sonuçlarını konsola yazdır
        setSearchResults(response.items);
        setShowNoResultsMessage(response.items.length === 0);
      })
      .catch((error) => {
        console.error('Error searching:', error);
      });
  };

  return (
    <>
      <PlatformHeader />
      <MiddleBanner>
        <p style={{ fontSize: '6em', marginLeft: "1rem" }} className='text-white fw-bold'>Eğitimlerim</p>
      </MiddleBanner>

      <Row className="justify-content-center mt-4">
        <Col md={4}>
          <Form.Control
            type="text"
            placeholder="Arama"
            className="rounded-pill"
            value={searchText}
            onChange={handleSearchChange}
          />
        </Col>
        <Col md={3}>
          <Dropdown>
            <Dropdown.Toggle variant="primary" id="dropdown-basic" className="rounded-pill">
              Kurum Seçiniz
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Kurum Seçiniz</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
        <Col md={3}>
          <Dropdown>
            <Dropdown.Toggle variant="primary" id="dropdown-basic" className="rounded-pill">
              Sıralama <i className="bi bi-caret-down-fill"></i>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">A'dan Z'ye</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Z'den A'ya</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Yeniden Eskiye</Dropdown.Item>
              <Dropdown.Item href="#/action-4">Eskiden Yeniye</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>
      <Container className='my-5'>
        {showNoResultsMessage && (
          <Alert variant="info">Arama sonucu bulunamadı.</Alert>
        )}
        <Row xs={1} md={2} lg={4} className="g-1">
          {(searchText === '' ? educationList : searchResults).map((searchData) => {
            const matchingData = educationList.find((data) => data.id === searchData.id);
            const displayData = matchingData ? matchingData : searchData;
            return (
              <Col key={displayData.id}>
                <EducationCard data={displayData} />
              </Col>
            );
          })}
        </Row>
      </Container>
      <PlatformFooter />
    </>
  );
};

export default MyEducation;
