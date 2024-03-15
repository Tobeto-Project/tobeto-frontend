import React, { useState, useEffect } from 'react';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import axios from 'axios';
import { TfiWorld } from 'react-icons/tfi';
import { useSelector } from 'react-redux';
import API_URL from '../../Services/config';
const BASE_URL = API_URL; 


export const PlatformForeignLanguage = () => {
    const [languages, setLanguages] = useState([]);
    const [levels, setLevels] = useState([]);
    const [selectedLanguage, setSelectedLanguage] = useState(0);
    const [selectedLevel, setSelectedLevel] = useState(0);

    const userId = useSelector(state => state.auth.userDetails.id);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const languagesResponse = await axios.get(`${BASE_URL}/ForeignLanguages/getlist?PageIndex=0&PageSize=15`);
            setLanguages(languagesResponse.data.items);

            const levelsResponse = await axios.get(`${BASE_URL}/ForeignLanguageLevels/getlist?PageIndex=0&PageSize=15`);
            setLevels(levelsResponse.data.items);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleLanguageChange = (e) => {
        setSelectedLanguage(e.target.value);
    };

    const handleLevelChange = (e) => {
        setSelectedLevel(e.target.value);
    };

    const handleSubmit = async () => {
        try {
            const selectedLanguageName = languages.find(language => language.id === selectedLanguage)?.name;
            const selectedLevelName = levels.find(level => level.id === selectedLevel)?.name;

            // post öncesi öncesi loglama, giden veri kontrolü 
            console.log('Gönderilen veri:', {
                UserId: userId,
                ForeignLanguageId: selectedLanguage,
                ForeignLanguageName: selectedLanguageName,
                LanguageLevelId: selectedLevel,
                LanguageLevelName: selectedLevelName,
            });

            await axios.post(`${BASE_URL}/UserLanguages/add`, {
                UserId: userId,
                ForeignLanguageId: selectedLanguage,
                LanguageLevelId: selectedLevel,
               
            });

            console.log('Kullanıcı dil bilgisi başarıyla eklendi');

            // Başarılı ekleme sonrası seçili dil ve seviye temizleme
            setSelectedLanguage(0);
            setSelectedLevel(0);
        } catch (error) {
            console.error('Kullanıcı dil bilgisi eklenirken hata oluştu:', error);
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
                    {/* Yabancı Dillerin Geleceği Yer */}
                    <Row>
                        <Col md={4}>
                            <div>
                                <span className='delete-lang' style={{ psition: 'absolute', }}></span>
                                <div className="mylanguage w-100" style={{ padding: 5 }}>
                                    <Row>
                                        <Col md={2}>
                                            <TfiWorld />
                                        </Col>
                                        <Col md={8}>
                                            <div className="d-flex flex-column">
                                                <span style={{ fontSize: "15px", color: "#828282" }}>Dil  </span>
                                                <span style={{ fontSize: "12px", color: "#828282CC" }}> Seviye </span>
                                            </div>
                                        </Col>
                                        <Col md={2}>
                                            <img src="https://tobeto.com/home.svg" alt="home" />
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </Col>
                        <Col md={4}></Col>
                        <Col md={4}></Col>
                    </Row>
                </Form>
            </Container>
        </div>
    );
};
