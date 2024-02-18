import React, { useState } from 'react'
import { Button, Container, Form, Modal, Nav, Navbar } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import employeeService from '../services/employeeService';

const EmployeesSearchMenu = ({ onSearchChange }) => {
  const [show, setShow] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [departmentName, setDepartmentName] = useState('');
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      if (password !== confirmPassword) {
        toast.error("Parolalar eşleşmiyor!");
        return;
      }

    try {
      const employeeData = {
        firstName,
        lastName,
        email,
        password,
        phoneNumber,
        departmentName,
      };
      await employeeService.registerEmployee(employeeData);
      toast.success("Çalışan başarıyla kaydedildi!");
      handleClose();
    } catch (error) {
      toast.error("Çalışan kaydedilirken bir hata oluştu!");
    }
  };
  
    return (
      <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid className='mx-4'>
          <Navbar.Brand href="#">Görevli Bilgileri</Navbar.Brand>
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
                placeholder="Görevli Ara"
                className="me-2"
                aria-label="Search"
                onChange={onSearchChange} 
              />
              <Button variant="outline-success" className='ms-2' onClick={handleShow}>Görevli Ekle</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

  
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Görevli Kaydı</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Ad</Form.Label>
                <Form.Control type="text" placeholder="Ad" required value={firstName} onChange={(e) => setFirstName(e.target.value)} />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Soyad</Form.Label>
                <Form.Control type="text" placeholder="Soyad" required value={lastName} onChange={(e) => setLastName(e.target.value)} />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Email" required value={email} onChange={(e) => setEmail(e.target.value)} />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Telefon Numarası</Form.Label>
                <Form.Control type="tel" placeholder="Telefon Numarası" required value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Departman Adı</Form.Label>
                <Form.Control type="text" placeholder="Departman Adı" required value={departmentName} onChange={(e) => setDepartmentName(e.target.value)} />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Parola</Form.Label>
                <Form.Control type="password" placeholder="Parola" required value={password} onChange={(e) => setPassword(e.target.value)} />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Parolayı Onayla</Form.Label>
                <Form.Control type="password" placeholder="Parolayı Onayla" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
              </Form.Group>


              <Button variant="primary" type="submit">
                Kaydet
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
  
        <ToastContainer position="bottom-right" autoClose={5000} />
    </>
  );
};

export default EmployeesSearchMenu