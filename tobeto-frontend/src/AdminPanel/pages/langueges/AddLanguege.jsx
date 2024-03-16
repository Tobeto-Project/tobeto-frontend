import React, { useState, useEffect } from 'react';
import { Form, Button, ListGroup, Col } from 'react-bootstrap';
import { fetchData, addLanguage, addLanguageLevel, deleteLanguage, deleteLanguageLevel } from "../../services/languagesService";

const AddLanguage = () => {
    const [language, setLanguage] = useState('');
    const [level, setLevel] = useState('');
    const [languagesList, setLanguagesList] = useState([]);
    const [levelsList, setLevelsList] = useState([]);

    const fetchDataAndLists = async () => {
        try {
            const { languages, levels } = await fetchData();
            setLanguagesList(languages);
            setLevelsList(levels);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchDataAndLists();
    }, []);

    const handleLanguageChange = (e) => {
        setLanguage(e.target.value);
    };

    const handleLevelChange = (e) => {
        setLevel(e.target.value);
    };

    const handleAddLanguage = async () => {
        try {
            const response = await addLanguage(language);
            console.log('Language added:', response);
            setLanguage('');
            fetchDataAndLists();
        } catch (error) {
            console.error('Error adding language:', error);
        }
    };

    const handleAddLevel = async () => {
        try {
            const response = await addLanguageLevel(level);
            console.log('Language level added:', response);
            setLevel('');
            fetchDataAndLists();
        } catch (error) {
            console.error('Error adding language level:', error);
        }
    };

    const handleDeleteLanguage = async (id) => {
        try {
            await deleteLanguage(id);
            console.log('Language deleted:', id);
            fetchDataAndLists();
        } catch (error) {
            console.error('Error deleting language:', error);
        }
    };

    const handleDeleteLevel = async (id) => {
        try {
            await deleteLanguageLevel(id);
            console.log('Language level deleted:', id);
            fetchDataAndLists();
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
