import React, { useEffect } from 'react'
import PlatformHeader from '../../Components/Layouts/PlatformHeader'
import Calendar from '../../Components/Layouts/Calendar'
import { Col, Row } from 'react-bootstrap'
import CalendarSidebar from '../../Components/Layouts/CalendarSidebar'

const PlatformTakvim = () => {
  return (
    <>
        <PlatformHeader/>
        <Row>
          <Col lg={3}><CalendarSidebar/></Col>
          <Col lg={9} className='p-0 m-0'><Calendar/></Col>
        </Row>
    </>
  )
}

export default PlatformTakvim