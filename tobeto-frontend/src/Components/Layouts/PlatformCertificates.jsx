import React, { useState, useEffect } from 'react';
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import { useSelector } from 'react-redux';
import { addCertificate, deleteCertificate, fetchCertificatesList } from "../../Services/certificateService";

const PlatformCertificates = () => {
    const [certificateFile, setCertificateFile] = useState(null);
    const [certificatesList, setCertificatesList] = useState([]);

    const userId = useSelector(state => state.auth.userDetails.id);

    useEffect(() => {
        fetchCertificates(userId);
    }, [userId]);

    const handleFileChange = (event) => {
        setCertificateFile(event.target.files[0]);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!certificateFile) {
            alert('Lütfen bir sertifika dosyası seçin');
            return;
        }

        try {
            await addCertificate(userId, certificateFile);
            fetchCertificates();
            setCertificateFile(null);
        } catch (error) {
            console.error('Error uploading certificate:', error);
        }
    };

    const fetchCertificates = async (userId) => {
        try {
            // console.log("Fetching certificates for user with ID:", userId);
            const certificates = await fetchCertificatesList(userId);
            //  console.log("certificates", certificates)
            setCertificatesList(certificates);
        } catch (error) {
            console.error('Error fetching certificates list:', error);
        }
    };

    const handleDelete = async (certificateId) => {
        try {
            await deleteCertificate(certificateId);
            fetchCertificates();
        } catch (error) {
            console.error('Error deleting certificate:', error);
        }
    };

    const handleDownload = (certificateUrl) => {
        window.open(certificateUrl, '_blank');
    };

    return (
        <div>
            <Container>
                <Form onSubmit={handleSubmit}>
                    <Row>
                        <Col>
                            <Form.Group controlId="formFile" className="mb-3d-flex align-items-center">
                                <div><Form.Label>Sertifikalarım</Form.Label></div>
                                <Form.Control type="file" onChange={handleFileChange} />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Button className='mt-4' variant="primary" type="submit">
                        SERTİFİKA YÜKLE
                    </Button>
                </Form>
                <div className='mt-5 mx-5'>
                    <h3> Sertifikalar</h3>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        {certificatesList.map((certificate, index) => (
                            <li key={index} style={{ marginBottom: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <span style={{ overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', marginRight: '10px', maxWidth: '450px' }}>{certificate.fileName}</span>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <Button className='mx-2' variant="primary" onClick={() => handleDownload(certificate.fileUrl)} >
                                        İndir
                                    </Button>
                                    <Button className='mx-2' variant="danger" onClick={() => handleDelete(certificate.id)} >
                                        Sil
                                    </Button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </Container>
        </div>
    );
};

export default PlatformCertificates;
