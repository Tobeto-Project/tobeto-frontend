import React, { useState } from 'react';
import { Button, Modal, Form, Navbar, Container, Nav } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { register } from '../../Services/RegisterService';

const ExamsSearchMenu = ({ onSearchChange }) => {
  const [show, setShow] = useState(false);
  const [examName, setExamName] = useState('');
  const [examDate, setExamDate] = useState('');
  const [confirmExamName, setConfirmExamName] = useState('');


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (examName !== confirmExamName) {
      toast.error("Sınav adları eşleşmiyor!");
      return;
    }
  
    try {
      const examData = {
        examName,
        examDate,
    
      };
      await register(examData);
      toast.success("Sınav başarıyla kaydedildi.");
      handleClose(); 
    } catch (error) {
      console.error(error);
      if (error.response && error.response.data) {
        // Sunucudan dönen hata mesajını göster
        toast.error(`Kayıt sırasında bir hata oluştu: ${error.response.data.message}`);
      } else {
        toast.error("Kayıt sırasında bir hata oluştu.");
      }
    }
  };

  return (
    <>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid className='mx-4'>
        <Navbar.Brand href="#">Sınav Bilgileri</Navbar.Brand>
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
              placeholder="Sınav Ara"
              className="me-2"
              aria-label="Search"
              onChange={onSearchChange} 
            />
           <Button variant="outline-success" className='ms-2' onClick={handleShow}>Sınav Ekle</Button>

          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>


      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sınav Oluştur</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Sınav Adı</Form.Label>
              <Form.Control type="text" placeholder="Sınav Adı" required value={examName} onChange={(e) => setExamName(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Sınav Tarihi</Form.Label>
              <Form.Control type="date" placeholder="Sınav Tarihi" required value={examDate} onChange={(e) => setExamDate(e.target.value)} />
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

export default ExamsSearchMenu;
