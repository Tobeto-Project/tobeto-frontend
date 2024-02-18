import React from 'react'
import Banner from '../Components/Layouts/Banner'
import Header from '../Components/Layouts/Header'
import { Container } from 'react-bootstrap'
import Footer from '../Components/Layouts/Footer';
import ContactForm from '../Components/Common/ContactForm';
import CalendarButton from '../Components/Common/CalendarButton';

const ContactUs = () => {
  return (
    <div className="pages-content">
        <Banner/>
        <Header/>
        <CalendarButton/>
        <div className="position-relative main-content">
            <Container>
                <ContactForm/>
            </Container>
        </div>
        <Footer/>   
    </div>
  )
}

export default ContactUs