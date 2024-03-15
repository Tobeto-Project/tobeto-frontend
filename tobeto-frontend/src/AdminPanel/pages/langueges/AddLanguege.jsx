import React, { useState, useEffect } from 'react';
import { Form, Button, ListGroup, Col } from 'react-bootstrap';
import axios from 'axios';
import API_URL from '../../../Services/config';
const BASE_URL = API_URL;

const AddLanguage = () => {
    const [language, setLanguage] = useState('');
    const [level, setLevel] = useState('');
    const [languagesList, setLanguagesList] = useState([]);
    const [levelsList, setLevelsList] = useState([]);

    const fetchData = async () => {
        try {
            const languagesResponse = await axios.get(`${BASE_URL}/ForeignLanguages/getlist?PageIndex=0&PageSize=15`);
            setLanguagesList(languagesResponse.data.items);

            const levelsResponse = await axios.get(`${BASE_URL}/ForeignLanguageLevels/getlist?PageIndex=0&PageSize=15`);
            setLevelsList(levelsResponse.data.items);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleLanguageChange = (e) => {
        setLanguage(e.target.value);
    };

    const handleLevelChange = (e) => {
        setLevel(e.target.value);
    };

    const handleAddLanguage = async () => {
        try {
            const response = await axios.post(`${BASE_URL}/ForeignLanguages/add`, {
                Name: language
            });
            console.log('Language added:', response.data);

            // Başarılı yüklelemeden sonra inputu temizle
            setLanguage('');
            // Refresh the list 
            fetchData();
        } catch (error) {
            console.error('Error adding language:', error);
        }
    };

    const handleAddLevel = async () => {
        try {
            const response = await axios.post(`${BASE_URL}/ForeignLanguageLevels/add`, {
                Name: level
            });
            console.log('Language level added:', response.data);

            // Başarılı yüklelemeden sonra inputu temizle
            setLevel('');
            // Başarılı yüklelemeden sonra inputu yenile
            fetchData();
        } catch (error) {
            console.error('Error adding language level:', error);
        }
    };

    const handleDeleteLanguage = async (id) => {
        try {
            await axios.delete(`${BASE_URL}/ForeignLanguages/delete`, {
                headers: {
                    'Content-Type': 'application/json'
                },
                data: {
                    Id: id
                }
            });

            console.log('Language deleted:', id);

            // Başarılı yüklelemeden sonra inputu yenile
            fetchData();
        } catch (error) {
            console.error('Error deleting language:', error);
        }
    };

    const handleDeleteLevel = async (id) => {
        try {
            await axios.delete(`${BASE_URL}/ForeignLanguageLevels/delete`, {
                headers: {
                    'Content-Type': 'application/json'
                },
                data: {
                    Id: id
                }
            });

            console.log('Language level deleted:', id);

            // Refresh the list after deletion
            fetchData();
        } catch (error) {
            console.error('Error deleting language level:', error);
        }
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <Form>
                        <Form.Group controlId="language">
                            <Form.Label>Dil Ekle</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Dil"
                                value={language}
                                onChange={handleLanguageChange}
                            />
                            <Button className='mt-2' variant="primary" onClick={handleAddLanguage}>
                                Dil Ekle
                            </Button>
                        </Form.Group>

                        <Form.Group className='mt-5' controlId="level">
                            <Form.Label>Dil Seviyesi Ekle</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Dil Seviyesi"
                                value={level}
                                onChange={handleLevelChange}
                            />
                            <Button className='mt-2' variant="primary" onClick={handleAddLevel}>
                                Dil Seviyesi Ekle
                            </Button>
                        </Form.Group>
                    </Form>
                </div>
                <div className="col-md-6">
                    <Col>
                        <h2>Diller</h2>
                        <ListGroup>
                            {languagesList.map((language) => (
                                <ListGroup.Item key={language.id} className="d-flex justify-content-between">
                                    {language.name}
                                    <Button variant="danger" onClick={() => handleDeleteLanguage(language.id)}>Sil</Button>
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                    </Col>

                    <Col>
                        <h2>Dil Seviyeleri</h2>
                        <ListGroup>
                            {levelsList.map((level) => (
                                <ListGroup.Item key={level.id} className="d-flex justify-content-between">
                                    {level.name}
                                    <Button variant="danger" onClick={() => handleDeleteLevel(level.id)}>Sil</Button>
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                    </Col>
                </div>
            </div>
        </div>
    );
};

export default AddLanguage;
