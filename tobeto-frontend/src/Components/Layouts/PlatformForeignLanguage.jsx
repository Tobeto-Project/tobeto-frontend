import React, { useState, useEffect } from 'react';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import axios from 'axios';
import { TfiWorld } from 'react-icons/tfi';
import { useSelector } from 'react-redux';
import { fetchLanguages, fetchLevels, fetchUserLanguages, addUserLanguage, deleteUserLanguage } from "../../Services/LanguageService";
import API_CONFIG from '../../Services/ApiConfig';

export const PlatformForeignLanguage = () => {
    const [languages, setLanguages] = useState([]);
    const [levels, setLevels] = useState([]);
    const [selectedLanguage, setSelectedLanguage] = useState(0);
    const [selectedLevel, setSelectedLevel] = useState(0);
    const [userLanguages, setUserLanguages] = useState([]);
    const [userLanguagesLevel, setUserLanguagesLevel] = useState([]);

    const userId = useSelector(state => state.auth.userDetails.id);

    useEffect(() => {
        const fetchDataAsync = async () => {
            const fetchedLanguages = await fetchLanguages();
            setLanguages(fetchedLanguages);
            const fetchedLevels = await fetchLevels();
            setLevels(fetchedLevels);
            const fetchedUserLanguages = await fetchUserLanguages(userId);
            setUserLanguages(fetchedUserLanguages);
            setUserLanguagesLevel(fetchedUserLanguages);
        };

        fetchDataAsync();
    }, [userId]);

    const handleLanguageChange = (e) => {
        setSelectedLanguage(e.target.value);
    };

    const handleLevelChange = (e) => {
        setSelectedLevel(e.target.value);
    };

    const handleSubmit = async () => {
        try {
            const newLanguage = languages.find(language => language.id === parseInt(selectedLanguage));
            const newLevel = levels.find(level => level.id === parseInt(selectedLevel));

            await addUserLanguage(userId, selectedLanguage, selectedLevel);

            const response = await axios.get(`${API_CONFIG.USER_LANGUAGE_GET_LIST_BY_USER}?id=${userId}`);
            const updatedUserLanguages = response.data.items;
            setUserLanguages(updatedUserLanguages);
            setUserLanguagesLevel(updatedUserLanguages);

            setSelectedLanguage(0);
            setSelectedLevel(0);
        } catch (error) {
            console.error('Error adding user language:', error);
        }
    };

    const handleDeleteUserLanguage = async (userLanguageId) => {
        try {
            await deleteUserLanguage(userLanguageId);
            console.log('Başarıyla silindi.');
            const updatedUserLanguages = userLanguages.filter(language => language.id !== userLanguageId);
            setUserLanguages(updatedUserLanguages);
            setUserLanguagesLevel(updatedUserLanguages);
        } catch (error) {
            console.error('Hata:', error);
        }
    };



    return (
        <div>
            <Container>
                <Form>
                    <Row>
                        <Col>
                            <Form.Group controlId="formForignLanguage">
                                <Form.Label className='mb-0'>Yabancı Dil</Form.Label>
                                <Form.Select name='MyLanguage' size="lg" onChange={handleLanguageChange} value={selectedLanguage}>
                                    <option value="0">Dil Seçiniz</option>
                                    {languages.map((language) => (
                                        <option key={language.id} value={language.id}>{language.name}</option>
                                    ))}
                                </Form.Select>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="formLanguageLevel">
                                <Form.Label className='mb-0'>Dil Seviyesi</Form.Label>
                                <Form.Select name='MyLanguageLevel' size="lg" onChange={handleLevelChange} value={selectedLevel}>
                                    <option value="0">Seviye Seçiniz</option>
                                    {levels.map((level) => (
                                        <option key={level.id} value={level.id}>{level.name}</option>
                                    ))}
                                </Form.Select>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Button variant="primary" type="button" className="mt-2" onClick={handleSubmit}>
                        Kaydet
                    </Button>
                    <br /><br />
                    <Row>
                        <Col className='px-3' md={6}>

                            {userLanguages && userLanguages.map(language => (
                                <Col key={language.id} md={8}>
                                    <Row>
                                        <Col md={2}>
                                            <TfiWorld className='mt-1' />
                                        </Col>
                                        <Col className='mt-1' md={6}>
                                            <div className="d-flex flex-column">
                                                <span style={{ fontSize: "16px", color: "#828282" }}>{language.foreignLanguageName}</span>
                                            </div>
                                        </Col>
                                        <Col>
                                            <Button className='mt-1' variant="danger" size="sm" onClick={() => handleDeleteUserLanguage(language.id)}>Sil</Button>
                                        </Col>
                                    </Row>
                                </Col>
                            ))}


                        </Col>
                        <Col className='px-0' >
                            {/* User Languages Level */}
                            {userLanguagesLevel.map(languageLevel => (
                                <Row key={languageLevel.id}>
                                    <Col className='mt-1' >
                                        <span style={{ fontSize: "18px", fontWeight: "bold", color: "#828282CC" }}>{languageLevel.foreignLanguageLevelName}</span>
                                    </Col>


                                </Row>
                            ))}
                        </Col>

                        <Col>

                        </Col>

                    </Row>
                </Form>
            </Container>
        </div>
    );
};