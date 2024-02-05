import React from 'react';
import Header from '../../Components/Layouts/Header';
import Banner from '../../Components/Layouts/Banner';
import Footer from '../../Components/Layouts/Footer';
import ContactForm from '../../Components/Common/NelerSunuyoruz/Bireylericin/Programs/GetInformationFromPrograms/ContactForm';
import { Container, Row } from 'react-bootstrap';
import StyledSections from '../../Components/Common/NelerSunuyoruz/Bireylericin/Programs/GetInformationFromPrograms/StyledSections';
import RegistrationForm from '../../Components/Common/RegistrationForm';
import { register } from '../../Services/RegisterService';
import { toast, ToastContainer } from 'react-toastify';

function GetInformationFromPrograms() {

    const handleSubmit = async (userData) => {
        try {
            await register(userData);

        } catch (error) {

            throw error;
        }
    };
    return (
        <div className="body-container pages-content">
            <Header />
            <Banner />
            <div className="position-relative main-content">
                <Container>
                    <ContactForm />
                    <StyledSections />
                </Container>
                <Container className='w-50 mt-5' >
                    <RegistrationForm onSubmit={handleSubmit} />
                    <ToastContainer position="bottom-right" autoClose={2000} />
                </Container>
            </div>
            <Footer />
        </div>
    );
}

export default GetInformationFromPrograms;
