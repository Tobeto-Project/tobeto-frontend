import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { fetchAllStudents } from '../../services/studentService';
import Button from 'react-bootstrap/Button';

const Students = () => {
    const [students, setStudents] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

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
        return <div>Yükleniyor...</div>;
    }

    return (
        <Table striped bordered hover variant="light" className='me-5'>
            <thead>
                <tr>
                    <th>#</th>
                    <th>İsim</th>
                    <th>Soy İsim</th>
                    <th>Mail</th>
                    <th>Tc Kimlik</th>
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
                        <td>{student.identityNumber}</td>
                        <td><Button variant="danger">Öğrenciyi Sil</Button></td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
};

export default Students;
