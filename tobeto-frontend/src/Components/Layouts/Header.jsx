import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../../Styles/LayoutStyles/HeaderStyle.css";
import logo from "../../Assets/Images/tobeto-white-logo.png";
import { Link } from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";

const Header = () => {
  return (
    <div>
      <Navbar expand="sm" bg="dark">
        <Container fluid>
          <Navbar.Brand href="#home">
            <Link to="/">
              <img src={logo} className="navbar-img" alt="Logo" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav
              className="mx-auto my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link as={Link} to="/bizkimiz"className="fw-bold ms-3 d-none d-xl-inline-block mt-3">
              <p className="nav-button">Biz Kimiz?</p>
              </Nav.Link>
              
              <NavDropdown
                id="nav-dropdown-dark-example"
                title={<span className="nav-button fw-bold ms-3 d-none d-xl-inline-block ">Neler Sunuyoruz?</span>}
                menuVariant="dark"
                className="mt-3 nav-dropdown-dark-example">
                <NavDropdown.Item as={Link} to="/bireylericin">
                  Bireyler İçin
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/kurumlaricin">
                 Kurumlar İçin
                </NavDropdown.Item>
              </NavDropdown>

              <Nav.Link
                as={Link}
                to="/katalog"
                className="text-white fw-bold  ms-3 d-none d-xl-inline-block  mt-3"
              >
                <p className="nav-button">Katalog</p>
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/codeacademy"
                className="text-white fw-bold ms-3 d-none d-xl-inline-block mt-3"
              >
                <p className="nav-button">Codeacademy</p>
              </Nav.Link>
              <NavDropdown
                id="nav-dropdown-dark-example"
                title={<span className="nav-button fw-bold ms-3 d-none d-xl-inline-block ">Tobeto'da Bu Ay</span>}
                menuVariant="dark"
                className="mt-3 nav-dropdown-dark-example"
              >
                <NavDropdown.Item as={Link} to="/Blog">
                  Blog
                </NavDropdown.Item >
                <NavDropdown.Item as={Link} to="/Basindabiz">
                  Basında Biz
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/Takvim">
                  Takvim
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/IstanbulKodluyor">
                  İstanbul Kodluyor
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Button as={Link} to="/girisyap"
              className="rounded-pill "
              variant="outline-light"
            >
              Giriş Yap
            </Button>
            <Button as={Link} to="/uyeol"
              className="rounded-pill "
              variant="outline-light mx-1"
            >
              Ücretsiz Üye Ol
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
