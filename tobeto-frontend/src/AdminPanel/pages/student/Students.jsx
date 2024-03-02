import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { deleteStudentById, fetchAllStudents } from '../../services/studentService';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import { ToastContainer, toast } from 'react-toastify';
import StudentsSearchMenu from '../../components/StudentsSearchMenu';
import Modal from 'react-bootstrap/Modal';


const Students = () => {
    const [students, setStudents] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [showDetailsModal, setShowDetailsModal] = useState(false);
    const [selectedStudent, setSelectedStudent] = useState(null);

    const handleDeleteClick = async (studentId) => {
        try {
            await deleteStudentById(studentId);
            const updatedStudents = students.filter(student => student.id !== studentId);
            setStudents(updatedStudents);
            toast.success('Öğrenci başarıyla silindi.');
        } catch (error) {
            console.error("Öğrenci silinirken bir hata oluştu.");
            toast.error('Öğrenci silinirken bir hata oluştu.');
        }
    };
      
    useEffect(() => {
        const getStudents = async () => {
            try {
                const data = await fetchAllStudents();
                setStudents(data.items);
                setIsLoading(false);
            } catch (error) {
                
                console.error('Öğrencileri yüklerken hata oluştu:', error);
                setIsLoading(false);
            }
        };

        getStudents();
    }, []);

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const filteredStudents = students.filter(student =>
        student.firstName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleShowDetails = (student) => {
        setSelectedStudent(student);
        setShowDetailsModal(true);
    };

    const handleCloseDetails = () => setShowDetailsModal(false);

    if (isLoading) {
        return <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner>;
    }


    if (isLoading) {
        return 
        <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
       </Spinner>;
    }

    return (
        <>
        <StudentsSearchMenu onSearchChange={handleSearchChange}/>
        <Table striped bordered hover variant="light" className='me-5'>
            <thead>
                <tr>
                    <th>#</th>
                    <th>İsim</th>
                    <th>Soy İsim</th>
                    <th>Mail</th>
                    <th>Telefon Numarası</th>
                    <th>Tc Kimlik Numarası</th>
                    <th>Öğrenci Silme</th>
                    <th>Öğrenci Bilgileri</th>
                </tr>
            </thead>
            <tbody>
                {filteredStudents.map((student, index) => (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{student.firstName}</td>
                        <td>{student.lastname}</td>
                        <td>{student.email}</td>
                        <td>{student.phoneNumber}</td>
                        <td>{student.identityNumber}</td>
                        <td><Button variant="danger" onClick={() => handleDeleteClick(student.id)}>Öğrenciyi Sil </Button></td>
                        <td><Button variant="info" onClick={() => handleShowDetails(student)}>Detaylar</Button></td>
                    </tr>
                ))}
            </tbody>
        </Table>
        <Modal show={showDetailsModal} onHide={handleCloseDetails}>
                <Modal.Header closeButton>
                    <Modal.Title>Öğrenci Detayları</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {selectedStudent && (
                        <>
                            <p>Adı: {selectedStudent.firstName}</p>
                            <p>Soyadı: {selectedStudent.lastname}</p>
                            <p>Email: {selectedStudent.email}</p>
                            <p>Telefon: {selectedStudent.phoneNumber}</p>
                            <p>TC Kimlik No: {selectedStudent.identityNumber}</p>
                            <p>Doğum Tarihi: {selectedStudent.birthDate}</p>
                            <p>Ülke: {selectedStudent.countryName}</p>
                            <p>Şehir: {selectedStudent.cityName}</p>
                            <p>İlçe: {selectedStudent.townName}</p>
                            <p>Açıklama: {selectedStudent.description}</p>
                            <p>Hakkımda: {selectedStudent.aboutMe}</p>
                        </>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseDetails}>Kapat</Button>
                </Modal.Footer>
            </Modal>
            <ToastContainer/>
        </>
    );
};

export default Students;
