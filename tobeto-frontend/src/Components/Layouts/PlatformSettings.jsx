import React, { useState, useEffect } from 'react';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import API_URL from '../../Services/config';

const BASE_URL = API_URL;

const PlatformSettings = () => {
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const userId = useSelector(state => state.auth.userDetails.id);
    const jwtToken = localStorage.getItem("jwtToken");

    const handlePasswordChange = async () => {
        try {
            if (newPassword !== confirmPassword) {
                toast.error("Yeni şifreler uyuşmuyor");
                return;
            }

            const response = await axios.put(
                `${BASE_URL}/Users/UpdateForPassword/forPassword`,
                {
                    id: userId,
                    lastPassword: oldPassword,
                    newPassword: newPassword,
                    checkNewPassword: confirmPassword
                },
                {
                    headers: {
                        Authorization: `Bearer ${jwtToken}`
                    }
                }
            );

            toast.success("Şifre başarıyla güncellendi");
        } catch (error) {
            console.error("Şifre güncelleme hatası", error);
            toast.error("Şifre güncelleme hatası");
        }
    };

    return (
        <div>
            <Container>
                <Form>
                    <Row>
                        <Col md={4}>
                            <Form.Group controlId="formOldPassword">
                                <Form.Label className='mb-0'>Eski Şifre*</Form.Label>
                                <Form.Control type="password" value={oldPassword} onChange={(e) => setOldPassword(e.target.value)} required />
                            </Form.Group>
                        </Col>
                        <Col md={4}>
                            <Form.Group controlId="formNewPassword">
                                <Form.Label className='mb-0'>Yeni Şifre*</Form.Label>
                                <Form.Control type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} required />
                            </Form.Group>
                        </Col>
                        <Col md={4}>
                            <Form.Group controlId="formNewPassword2">
                                <Form.Label className='mb-0'>Yeni Şifre Tekrar*</Form.Label>
                                <Form.Control type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className='mt-5'>
                        <Col md={6}>
                            <Button variant="primary" className='w-100' onClick={handlePasswordChange}>
                                Şifre Değiştir
                            </Button>
                        </Col>
                        <Col md={6}>
                            <Button variant="danger" className='w-100 rounded-pill'>
                                Üyeliği Sonlandır
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </Container>
            <ToastContainer />
        </div>
    );
};

export default PlatformSettings;
