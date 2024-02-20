// RegistrationForm.js
import React, { useState } from 'react';
import { Form, Button, Image } from 'react-bootstrap';
import link from '../../Assets/Images/tobeto-black.png';
import { Link} from 'react-router-dom';
import { toast } from 'react-toastify';

const RegistrationForm = ({ onSubmit,onModalShow  }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        if (!firstName || !lastName || !email || !phoneNumber || !password || !confirmPassword) {
            toast.error("Lütfen tüm alanları doldurunuz!");
            return;
        }

        if (password !== confirmPassword) {
            toast.error("Parolalar eşleşmiyor!");
            return;
        }

        try {
            const userData = {
                firstName,
                lastName,
                email,
                password,
                phoneNumber
            };

            await onSubmit(userData);

            toast.success("Kaydınız oluşturuldu.", {
                autoClose: 200,
                onClose: () => window.location.href = '/girisyap' // Redirect when the toast closes
            });
        } catch (error) {
            toast.error('Kayıt sırasında hata oluştu');
        }
        
    };

    return (
        <Form className="my-4 mb-5 p-5 btn-rainbow-card" onSubmit={handleFormSubmit}>
            <div className="text-center mt-1 mb-4">
                <Image className="my-2" src={link} fluid />
            </div>
            <div className="text-center my-4 fs-1 fw-bold text-dark">Hemen Kayıt ol</div>

            <Form.Group className="mb-4 mx-5" controlId="formBasicName">
                <Form.Control
                    type="text"
                    placeholder="Ad*"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
            </Form.Group>

            <Form.Group className="mb-4 mx-5" controlId="formBasicLastname">
                <Form.Control
                    type="text"
                    placeholder="Soyad*"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
            </Form.Group>

            <Form.Group className="mb-4 mx-5" controlId="formPhoneNumber">
                <Form.Control
                    type="tel"
                    placeholder="Telefon numaranızı girin*"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                />
            </Form.Group>

            <Form.Group className="mb-4 mx-5" controlId="formBasicEmail">
                <Form.Control
                    type="email"
                    placeholder="E-posta adresinizi girin*"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </Form.Group>

            <Form.Group className="mb-4 mx-5" controlId="formBasicPassword">
                <Form.Control
                    type="password"
                    placeholder="Parolanızı girin*"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </Form.Group>

            <Form.Group className="mb-4 mx-5" controlId="formAgainBasicPassword">
                <Form.Control
                    type="password"
                    placeholder="Tekrar Parolanızı girin*"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
            </Form.Group>

            <div className="text-center">
                <Button
                    variant="primary"
                    type="submit"
                    className="btn-success rounded-pill px-5 btn-lg"
                >
                    Kayıt Ol
                </Button>
            </div>

            <div className="text-center mt-3">
                <Link to="/girisyap">
                    Zaten bir hesabın var mı? Giriş Yap
                </Link>
            </div>
        </Form>
    );
};

export default RegistrationForm;
