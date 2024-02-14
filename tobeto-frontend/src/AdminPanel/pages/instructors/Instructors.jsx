import React from 'react'
import { Table } from 'react-bootstrap'
import InstructorsSearchMenu from '../../components/InstructorsSearchMenu'

const Instructors = () => {
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

export default Instructors