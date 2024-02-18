import React, { useState, useEffect } from 'react';
import { Button, Table } from 'react-bootstrap';
import EmployeesSearchMenu from '../../components/EmployeesSearchMenu';
import employeeService from '../../services/employeeService'; // Bu yolu kendi projenize göre düzenleyin.
import { ToastContainer, toast } from 'react-toastify';

const Employees = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const data = await employeeService.getEmployeesList();
        setEmployees(data.items);
      } catch (error) {
        console.error("Çalışanlar yüklenirken bir hata oluştu!", error);
      }
    };

    fetchEmployees();
  }, []);

  const handleDelete = async (id) => {
    try {
      await employeeService.deleteEmployee(id);
      setEmployees(employees.filter(employee => employee.id !== id)); // Silme işlemi sonrası listeyi güncelle
      toast.success("Çalışan başarıyla silindi!"); // Gerçek bir projede toast kullanabilirsiniz.
    } catch (error) {
      console.error("Çalışanı silme işlemi başarısız!", error);
    }
  };

  return (
    <>
      <EmployeesSearchMenu/>
      <Table striped bordered hover variant="light" className='me-5'>
        <thead>
          <tr>
            <th>#</th>
            <th>İsim</th>
            <th>Soy İsim</th>
            <th>Mail</th>
            <th>Telefon Numarası</th>
            <th>Departman Adı</th>
            <th>Görevli Silme</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => (
            <tr key={employee.id}>
              <td>{index + 1}</td>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.email}</td>
              <td>{employee.phoneNumber}</td>
              <td>{employee.departmentName}</td>
              <td>
                <Button variant="danger" onClick={() => handleDelete(employee.id)}>Sil</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <ToastContainer/>
    </>
  );
};

export default Employees;
