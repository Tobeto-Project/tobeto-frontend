import React from 'react'
import { Button, Table } from 'react-bootstrap'
import EmployeesSearchMenu from '../../components/EmployeesSearchMenu'

const Employees = () => {
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
                    <th>Görevli Silme</th>
                </tr>
            </thead>
            <tbody>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
            </tbody>
        </Table>
    </>
  )
}

export default Employees