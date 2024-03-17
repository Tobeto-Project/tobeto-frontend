import React, { useState, useEffect } from 'react';
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import { useSelector } from 'react-redux';
import { fetchCompetenceList, fetchUserCompetences, addCompetence, deleteCompetence } from "../../Services/compatienceService";

const PlatformCompetencies = () => {
  const [competenceList, setCompetenceList] = useState([]);
  const userId = useSelector(state => state.auth.userDetails.id);
  const [selectedCompetence, setSelectedCompetence] = useState('');
  const [userCompetences, setUserCompetences] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const competenceData = await fetchCompetenceList();
        setCompetenceList(competenceData);
        const userCompetenceData = await fetchUserCompetences(userId);
        setUserCompetences(userCompetenceData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [userId]);


  const handleSave = async () => {
    if (!selectedCompetence) {
      console.error('Please select a competence');
      return;
    }

    try {
      await addCompetence(userId, selectedCompetence);
      const updatedUserCompetences = await fetchUserCompetences(userId);
      setUserCompetences(updatedUserCompetences);
    } catch (error) {
      console.error('Error saving competence:', error);
    }
  };

  const handleDeleteCompetence = async (id) => {
    try {
      await deleteCompetence(id);
      const updatedUserCompetences = await fetchUserCompetences(userId);
      setUserCompetences(updatedUserCompetences);
    } catch (error) {
      console.error('Error deleting competence:', error);
    }
  };

  return (
    <div>
      <Container>
        <Form>
          <Row className='mb-2'>
            <Col>
              <Form.Group controlId="formMyCompetencies">
                <Form.Label className='mb-0'>Yetkinlik</Form.Label>
                <Form.Select
                  name='MyCompetencies'
                  size="lg"
                  onChange={(e) => setSelectedCompetence(e.target.value)}
                  value={selectedCompetence}
                >
                  <option value="">Yetkinlik Seçiniz</option>
                  {competenceList.map((competenceItem, index) => (
                    <option key={index} value={competenceItem.id}>{competenceItem.name}</option>
                  ))}
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>
          <Button variant="primary" type="button" className="mt-2" onClick={handleSave}>
            Kaydet
          </Button>
        </Form>
      </Container>

      <hr />

      <h2>Kullanıcı Yetkinlikleri</h2>
      <Container>
        <ul style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
          {userCompetences.map((competenceItem, index) => (
            <li key={index} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span>{competenceItem.skillName}</span>
              <Button variant="danger" onClick={() => handleDeleteCompetence(competenceItem.id)}>Delete</Button>
            </li>
          ))}
        </ul>
      </Container>
    </div>
  )
}

export default PlatformCompetencies;
