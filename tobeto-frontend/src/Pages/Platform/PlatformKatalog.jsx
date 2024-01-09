import { Container, Row,Col } from 'react-bootstrap'
import PlatformHeader from '../../Components/Layouts/PlatformHeader'
import KatalogMenu from '../../Components/Common/KatalogMenu'
import KatalogCard from '../../Components/Common/KatalogCard'
import MiddleBanner from '../../Components/Common/MiddleBanner'


const PlatformKatalog = () => {

  return (
    <div className='body-container'>
      <PlatformHeader/>
      <MiddleBanner>
        
      </MiddleBanner>
      <div>
        <Container className='my-4'>
          <Row>
            <Col sm={3}><KatalogMenu/></Col>
            <Col sm={9}><KatalogCard/></Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default PlatformKatalog