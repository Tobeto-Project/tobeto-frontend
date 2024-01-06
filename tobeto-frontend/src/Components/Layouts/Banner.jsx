import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../../Styles/LayoutStyles/BannerStyle.css";
import logo from "../../Assets/Images/istanbulkodluyor-logo-white.svg";

const Banner = () => {
  return (
    <Navbar className="banner p-2">
      <Container >
        <img src={logo} className="banner-img" alt="Logo" />
        <Nav className="mx-auto my-2 my-lg-0" style={{ maxHeight: "100px" }}>
          <Nav.Link className="text-white fs-2 d-none d-md-inline">
            Aradığın "İş" Burada!
          </Nav.Link>
        </Nav>
        <Button className="px-5 rounded-pill" variant="success " size="lg">
          Başvur
        </Button>
      </Container>
    </Navbar>
  );
};

export default Banner;
