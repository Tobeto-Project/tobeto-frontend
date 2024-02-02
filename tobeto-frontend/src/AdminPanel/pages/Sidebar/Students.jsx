import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { deleteStudentById, fetchAllStudents } from '../../services/studentService';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import { toast } from 'react-toastify';
import StudentsSearchMenu from '../../components/StudentsSearchMenu';


const Students = () => {
    const [students, setStudents] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const handleDeleteClick = async (studentId) => {
        try {
            await deleteStudentById(studentId);
            // Silme işlemi başarılıysa, öğrenci listesini güncelleyin
            const updatedStudents = students.filter(student => student.id !== studentId);
            setStudents(updatedStudents);
            // Kullanıcıya bildirim göster
            toast.success('Öğrenci başarıyla silindi.');
        } catch (error) {
            // Hata yönetimi
            console.error("Öğrenci silinirken bir hata oluştu.");
            toast.error('Öğrenci silinirken bir hata oluştu.');
        }
    };
      
    useEffect(() => {
        const getStudents = async () => {
            try {
                const data = await fetchAllStudents();
                setStudents(data.items); // Varsayalım ki API'den gelen veri 'items' adında bir dizi içeriyor
                setIsLoading(false);
            } catch (error) {
                
                console.error('Öğrencileri yüklerken hata oluştu:', error);
                setIsLoading(false);
            }
        };

        getStudents();
    }, []);


    if (isLoading) {
        return 
        <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
       </Spinner>;
    }

    return (
        <>
        <StudentsSearchMenu/>
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
                </tr>
            </thead>
            <tbody>
                {students.map((student, index) => (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{student.firstName}</td>
                        <td>{student.lastname}</td>
                        <td>{student.email}</td>
                        <td>{student.phoneNumber}</td>
                        <td>{student.identityNumber}</td>
                        <td><Button variant="danger" onClick={() => handleDeleteClick(student.id)}>Öğrenciyi Sil</Button></td>
                    </tr>
                ))}
            </tbody>
        </Table>
        </>
    );
};

export default Students;
