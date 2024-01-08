import { Col, Container, Row } from "react-bootstrap";
import PlatformHeader from "../../Components/Layouts/PlatformHeader";
import { useSelector } from "react-redux";
import photo from "../../Assets/Images/anasayfa-isim-arkası.svg";
import "../../Styles/PagesStyles/PlatformStyle/PlatformStyle.css";
import PlatformNavigation from "../../Components/Layouts/PlatformNavigation";
import PlatformFooter from "../../Components/Layouts/PlatformFooter";

const Platform = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <>
      <PlatformHeader />
      <Container className="mb-5">
        <Row>
          <Col sm={12}>
            <div className="text-center text-center-platform mt-5 fw-bold">
              <div className="fs-1">
                <span style={{ color: "#9933FC" }}>TOBETO</span>'ya hoş geldin
              </div>

              <div className="fs-2 mb-3">{user.name}</div>
              <div className="fs-4">
                Yeni nesil öğrenme deneyimi ile Tobeto kariyer yolculuğunda
                senin yanında!
              </div>
              <img src={photo} className="img-platform"></img>
            </div>
            <div className="mt-5">
                <PlatformNavigation/>
            </div>
          </Col>
        </Row>
      </Container> 
      <PlatformFooter/>
    </>
  );
};

export default Platform;
