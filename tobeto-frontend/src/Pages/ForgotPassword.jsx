import React from 'react'
import Banner from '../Components/Layouts/Banner'
import Header from '../Components/Layouts/Header'
import Footer from '../Components/Layouts/Footer'
import { Button,Form } from 'react-bootstrap'

const ForgotPassword = () => {
  return (
    <div className="body-container pages-content-2">
        <Banner/>
        <Header/>
        <div className="main-content text-center "> 

        <h1 className="text-black mt-3">Şifre Sıfırlama</h1>
        <Form.Group>
          <div className="container mt-3">
          <Form.Control type="text" placeholder='Şifre sıfırlama linki için e-posta adresinizi giriniz'/>
          </div>
          <Button className="mt-3 my-3">Gönder</Button>
        </Form.Group>

      
        </div>  
        <Footer/>
    </div>
  )
}

export default ForgotPassword