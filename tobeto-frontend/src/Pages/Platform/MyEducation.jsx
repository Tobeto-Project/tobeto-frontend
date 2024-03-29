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
  const [sortOption, setSortOption] = useState('a-z');
  const [sortedResults, setSortedResults] = useState([]);

  useEffect(() => {
    getEducationData().then((data) => {
      setEducationList(data);
      setSortedResults(sortSearchResults(data));
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
        setSortedResults(sortSearchResults(response.items));
      })
      .catch((error) => {
        console.error('Error searching:', error);
      });
  };

  const sortSearchResults = (results) => {
    const sortedResults = [...results];
    if (sortOption === 'a-z') {
      sortedResults.sort((a, b) => (a.name && b.name) ? a.name.localeCompare(b.name) : 0);
    } else if (sortOption === 'z-a') {
      sortedResults.sort((a, b) => (a.name && b.name) ? b.name.localeCompare(a.name) : 0);
    } else if (sortOption === 'new-old') {
      sortedResults.sort((a, b) => (a.createdDate && b.createdDate) ? new Date(b.createdDate) - new Date(a.createdDate) : 0);
    } else if (sortOption === 'old-new') {
      sortedResults.sort((a, b) => (a.createdDate && b.createdDate) ? new Date(a.createdDate) - new Date(b.createdDate) : 0);
    }
    return sortedResults;
  };


  const handleSortChange = (option) => {
    setSortOption(option);
    const resultsToSort = searchText ? searchResults : educationList;
    const sortedResults = sortSearchResults(resultsToSort);
    setSortedResults(sortedResults);
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
              <Dropdown.Item onClick={() => handleSortChange('a-z')}>A'dan Z'ye</Dropdown.Item>
              <Dropdown.Item onClick={() => handleSortChange('z-a')}>Z'den A'ya</Dropdown.Item>
              <Dropdown.Item onClick={() => handleSortChange('new-old')}>Yeniden Eskiye</Dropdown.Item>
              <Dropdown.Item onClick={() => handleSortChange('old-new')}>Eskiden Yeniye</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>
      <Container className='my-5'>
        {showNoResultsMessage && (
          <Alert variant="info">Arama sonucu bulunamadı.</Alert>
        )}
        <Row xs={1} md={2} lg={4} className="g-1">
          {sortedResults.map((searchData) => {
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
