import React, { useState, useEffect } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { getContactInformation, updateContactInformation } from '../../../Services/ContactService';
import { ToastContainer, toast } from 'react-toastify';

function AdminContact() {
  const [contactData, setContactData] = useState({
    id: "52a68363-e060-48ba-3c57-08dc37f432a2",
    companyName: "",
    companyTitle: "",
    taxDepartment: "",
    taxNumber: "",
    phone: "",
    email: "",
    address: "",
  });

  useEffect(() => {
    const fetchContactInformation = async () => {
      try {
        const data = await getContactInformation();
        if (data && data.length > 0) {
          setContactData(data[0]); // Varsayılan olarak ilk kaydı yükle
        }
      } catch (error) {
        console.error('Error fetching contact information:', error);
      }
    };

    fetchContactInformation();
  }, []);

  const handleChange = (e) => {
    setContactData({ ...contactData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!contactData.id) {
      toast.error('Güncellenmek istenen kaydın ID\'si eksik.');
      return;
    }
    try {
      const response = await updateContactInformation(contactData);
      console.log(response);
      toast.success('İletişim bilgileri başarıyla güncellendi.');
    } catch (error) {
      console.error('İletişim bilgileri güncellenirken bir hata oluştu:', error);
      toast.error('İletişim bilgileri güncellenirken bir hata oluştu.');
    }
  };
  
    
      return (
        <Container>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Firma Adı</Form.Label>
            <Form.Control
              type="text"
              name="companyName"
              value={contactData.companyName}
              onChange={handleChange}
              placeholder="Firma Adını Girin"
            />
          </Form.Group>
    
          <Form.Group className="mb-3">
            <Form.Label>Firma Unvanı</Form.Label>
            <Form.Control
              type="text"
              name="companyTitle"
              value={contactData.companyTitle}
              onChange={handleChange}
              placeholder="Firma Unvanını Girin"
            />
          </Form.Group>
    
          <Form.Group className="mb-3">
            <Form.Label>Vergi Dairesi</Form.Label>
            <Form.Control
              type="text"
              name="taxDepartment"
              value={contactData.taxDepartment}
              onChange={handleChange}
              placeholder="Vergi Dairesini Girin"
            />
          </Form.Group>
    
          <Form.Group className="mb-3">
            <Form.Label>Vergi Numarası</Form.Label>
            <Form.Control
              type="text"
              name="taxNumber"
              value={contactData.taxNumber}
              onChange={handleChange}
              placeholder="Vergi Numarasını Girin"
            />
          </Form.Group>
    
          <Form.Group className="mb-3">
            <Form.Label>Telefon</Form.Label>
            <Form.Control
              type="text"
              name="phone"
              value={contactData.phone}
              onChange={handleChange}
              placeholder="Telefon Numarasını Girin"
            />
          </Form.Group>
    
          <Form.Group className="mb-3">
            <Form.Label>E-Posta</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={contactData.email}
              onChange={handleChange}
              placeholder="E-Posta Adresini Girin"
            />
          </Form.Group>
    
          <Form.Group className="mb-3">
            <Form.Label>Adres</Form.Label>
            <Form.Control
              type="text"
              name="address"
              value={contactData.address}
              onChange={handleChange}
              placeholder="Adresi Girin"
            />
          </Form.Group>
    
          <Button variant="primary" type="submit">
            Güncelle
          </Button>
        </Form>
        <ToastContainer/>
        </Container>
      );
    }

export default AdminContact;
