import React, { useState } from 'react'
import { Button, Container, Form, Modal, Nav, Navbar } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';

const InstructorsSearchMenu = ({ onSearchChange }) => {
    const [show, setShow] = useState(false);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      if (password !== confirmPassword) {
        toast.error("Parolalar eşleşmiyor!");
        return;
      }
    };
  
    return (
      <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid className='mx-4'>
          <Navbar.Brand href="#">Eğitmen Bilgileri</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Eğitmen Ara"
                className="me-2"
                aria-label="Search"
                onChange={onSearchChange} 
              />
             <Button variant="outline-success" className='ms-2' onClick={handleShow}>Eğitmen Ekle</Button>
  
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Eğitmen Kaydı</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleSubmit}>
              {/* Form alanları */}
              <Form.Group className="mb-3">
                <Form.Label>Ad</Form.Label>
                <Form.Control type="text" placeholder="Ad" required/>
              </Form.Group>
  
              <Form.Group className="mb-3">
                <Form.Label>Soyad</Form.Label>
                <Form.Control type="text" placeholder="Soyad" required />
              </Form.Group>
  
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Email" required/>
              </Form.Group>
  
              <Form.Group className="mb-3">
                <Form.Label>Telefon Numarası</Form.Label>
                <Form.Control type="tel" placeholder="Telefon Numarası" required/>
              </Form.Group>
  
              <Form.Group className="mb-3">
                <Form.Label>Parola</Form.Label>
                <Form.Control type="password" placeholder="Parola" required/>
              </Form.Group>
  
              <Form.Group className="mb-3">
                <Form.Label>Parolayı Onayla</Form.Label>
                <Form.Control type="password" placeholder="Parolayı Onayla"/>
              </Form.Group>
  
              <Button variant="primary" type="submit">
                Kaydet
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
  
        <ToastContainer position="bottom-right" autoClose={5000} />
    </>
  )
}

export default InstructorsSearchMenu