import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../../Styles/LayoutStyles/BannerStyle.css";
import logo from "../../Assets/Images/istanbulkodluyor-logo-white.svg";

const Banner = () => {
  return (
    <Navbar className="banner p-2" fixed="top">
      <Container >
        <img src={logo} className="banner-img" alt="Logo" />
        <Nav className="mx-auto my-2 my-lg-0" style={{ maxHeight: "100px" }}>
          <Nav.Link className="text-white fs-4 d-none d-md-inline fw-bold">
            Aradığın <span style={{color:"#00B077"}}>"</span>İş<span style={{color:"#00B077"}}>"</span> Burada!
          </Nav.Link>
        </Nav>
        <Button className="px-5 rounded-pill shadow-0" style={{backgroundColor:"#00B077", color:"#1E0F40"}} variant="success" size="md">
          <span className="fw-bold">Başvur</span>
        </Button>
      </Container>
    </Navbar>
  );
};

export default Banner;
