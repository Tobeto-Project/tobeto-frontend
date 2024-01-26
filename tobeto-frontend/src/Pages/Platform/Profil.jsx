import PlatformHeader from "../../Components/Layouts/PlatformHeader";
import { Col, Container, Row } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import foto from '../../Assets/Images/user-photo.png';

const Profil = () => {
  return (
    <>
      <PlatformHeader />
      <Container className="mt-5">
        <Row className="mt-5">
          {/* Gülüzar */}
          <Col md={4} className="border">
            <div>
              <Card style={{ width: "18rem" }}>
                <div className="d-flex justify-content-center rounded" style={{backgroundColor:"#696EDC"}}><Card.Img variant="top" src={foto} style={{width:"100px"}}/></div>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div>
              
            </div>
          </Col>

          {/* Hasan Can */}
          <Col md={8} className="border">
            
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Profil;
