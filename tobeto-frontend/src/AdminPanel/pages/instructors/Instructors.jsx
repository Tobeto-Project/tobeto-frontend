import React, { useState, useEffect } from 'react';
import { Button, Table } from 'react-bootstrap';
import InstructorsSearchMenu from '../../components/InstructorsSearchMenu';
import instructorsService from '../../services/instructorsService';


const Instructors = () => {
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    const fetchInstructors = async () => {
      try {
        const data = await instructorsService.getInstructorsList();
        setInstructors(data.items);
      } catch (error) {
        console.error("Eğitmenler yüklenirken bir hata oluştu!", error);
      }
    };

    fetchInstructors();
  }, []);

  const handleDelete = async (id) => {
    try {
      await instructorsService.deleteInstructor(id);
      setInstructors(instructors.filter(instructor => instructor.id !== id)); // Silme işlemi sonrası listeyi güncelle
      alert("Eğitmen başarıyla silindi!"); // Gerçek bir projede toast kullanabilirsiniz.
    } catch (error) {
      console.error("Eğitmeni silme işlemi başarısız!", error);
    }
  };

  return (
    <>
      <InstructorsSearchMenu/>
      <Table striped bordered hover variant="light" className='me-5'>
        <thead>
          <tr>
            <th>#</th>
            <th>İsim</th>
            <th>Soy İsim</th>
            <th>Mail</th>
            <th>Telefon Numarası</th>
            <th>Eğitmen Silme</th>
          </tr>
        </thead>
        <tbody>
          {instructors.map((instructor, index) => (
            <tr key={instructor.id}>
              <td>{index + 1}</td>
              <td>{instructor.firstName}</td>
              <td>{instructor.lastName}</td>
              <td>{instructor.email}</td>
              <td>{instructor.phoneNumber}</td>
              <td>
                <Button variant="danger" onClick={() => handleDelete(instructor.id)}>Sil</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default Instructors;
