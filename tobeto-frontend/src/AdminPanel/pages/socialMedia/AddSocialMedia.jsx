import React, { useState, useEffect } from 'react';
import { Button, Form, Container, Row, Col, ListGroup, Toast } from 'react-bootstrap';
import addSocialMediaService from '../../services/addSocialMediaService';

const AddSocialMedia = () => {
    const [socialMediaName, setSocialMediaName] = useState('');
    const [socialMediaList, setSocialMediaList] = useState([]);
    const [showToast, setShowToast] = useState(false);

    const addSocialMedia = async () => {
        try {
            const isExist = socialMediaList.some(socialMedia => socialMedia.name.toLowerCase() === socialMediaName.toLowerCase());
            if (isExist) {
                setShowToast(true);
                return;
            }

            await addSocialMediaService.addSocialMedia(socialMediaName);
            setSocialMediaName('');
            fetchSocialMediaList();
        } catch (error) {
            console.error(error.message);
        }
    };

    const fetchSocialMediaList = async () => {
        try {
            const socialMediaItems = await addSocialMediaService.fetchSocialMediaList();
            setSocialMediaList(socialMediaItems);
        } catch (error) {
            console.error(error.message);
        }
    };

    useEffect(() => {
        fetchSocialMediaList();
    }, []);

    const deleteSocialMedia = async (id) => {
        try {
            await addSocialMediaService.deleteSocialMedia(id);
            fetchSocialMediaList();
        } catch (error) {
            console.error(error.message);
        }
    };

    return (
        <Container>
            <Row>
                <Col>
                    <Form>
                        <Form.Group controlId="socialMediaName">
                            <Form.Label>Sosyal Medya Adı</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Sosyal medya adını girin"
                                value={socialMediaName}
                                onChange={(e) => setSocialMediaName(e.target.value)}
                            />
                        </Form.Group>
                        <Button className='mt-3' variant="primary" onClick={addSocialMedia}>
                            Ekle
                        </Button>
                        <Toast onClose={() => setShowToast(false)} show={showToast} delay={3000} autohide style={{ position: 'absolute', top: 0, right: 0, zIndex: 100 }}>
                            <Toast.Header>
                                <strong className="mr-auto">Bilgi</strong>
                            </Toast.Header>
                            <Toast.Body>Bu sosyal medya zaten eklenmiş.</Toast.Body>
                        </Toast>
                    </Form>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col>
                    <h5>Eklenecek Sosyal Medya Listesi</h5>
                    <ListGroup>
                        {Array.isArray(socialMediaList) && socialMediaList.map((socialMedia, index) => (
                            <ListGroup.Item key={index} >
                                <Row >
                                    <Col>{socialMedia.name}</Col>
                                    <Col className="d-flex justify-content-end mx-5">
                                        <Button variant="danger" onClick={() => deleteSocialMedia(socialMedia.id)}>
                                            Sil
                                        </Button>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                </Col>
            </Row>

        </Container>
    );
};

export default AddSocialMedia;
