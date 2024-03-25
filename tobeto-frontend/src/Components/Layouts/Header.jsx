import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../Assets/Images/tobeto-white-logo.png";
import logo2 from "../../Assets/Images/platform-tobeto-icon.svg";
import userphoto from "../../Assets/Images/user-photo.png"
import { Link, useNavigate } from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../Store/Actions/authActions.js";
import { Dropdown, NavLink, Offcanvas } from "react-bootstrap";
import "../../Styles/LayoutStyles/HeaderStyle.scss";

const Header = () => {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const userDetails = useSelector(state => state.auth.userDetails);
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const HandleLogout = () => {
    dispatch(logout());
    navigate("/girisyap");
  };




  return (
    <div>
      <Navbar expand="sm" className="navbar" style={{ backgroundColor: "#181717", marginTop: "60px" }} fixed="top">
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
              <Nav.Link
                as={Link}
                to="/bizkimiz"
                className="fw-bold ms-3 d-none d-xl-inline-block mt-3"
              >
                <p className="nav-button">Biz Kimiz?</p>
              </Nav.Link>

              <NavDropdown
                id="nav-dropdown-dark-example"
                title={
                  <span className="nav-button fw-bold ms-3 d-none d-xl-inline-block ">
                    Neler Sunuyoruz?
                  </span>
                }
                menuVariant="dark"
                className="mt-3 nav-dropdown-dark-example"
              >
                <NavDropdown.Item className="nav-background" as={Link} to="/bireylericin">
                  Bireyler İçin
                </NavDropdown.Item>
                <NavDropdown.Item className="nav-background" as={Link} to="/kurumlaricin">
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
                title={
                  <span className="nav-button fw-bold ms-3 d-none d-xl-inline-block ">
                    Tobeto'da Bu Ay
                  </span>
                }
                menuVariant="dark"
                className="mt-3 nav-dropdown-dark-example"
              >
                <NavDropdown.Item as={Link} to="/Blog">
                  Blog
                </NavDropdown.Item>
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
            {!isLoggedIn && (
              <Button
                as={Link}
                to="/girisyap"
                className="btn rounded-pill my-2 ms-2 text-white"
                variant="outline-light"
              >
                Giriş Yap
              </Button>
            )}
            {!isLoggedIn && (
              <Button
                as={Link}
                to="/uyeol"
                className="btn rounded-pill btn-rainbow my-2 ms-2 text-white"
                style={{ backgroundColor: "#181717" }}
                variant="mx-1"
              >
                Ücretsiz Üye Ol
              </Button>
            )}
            {isLoggedIn && (
              <>
                <Link to={"/platform"}><div
                  variant="dark"
                  id="dropdown-basic"
                  className=" me-3  rounded-pill btn btn-primary border-light m-0 p-2 text-white"
                >
                  <img
                    src={userphoto}
                    alt={`${userDetails.firstName}'s profile`}
                    style={{
                      width: "32px",
                      height: "32px",
                      marginRight: "10px",
                      borderRadius: "50%",
                    }} // Profil resmi için stil
                  />
                  {userDetails.firstName + " " + userDetails.lastName}
                </div></Link>

              </>
            )}
          </Navbar.Collapse>
          <button
            className="btn btn-dark ms-2 d-xl-none d-block "
            onClick={() => setShowOffcanvas(!showOffcanvas)}
          >
            ☰
          </button>

        </Container>
      </Navbar>
      <Offcanvas show={showOffcanvas} onHide={() => setShowOffcanvas(false)}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {!isLoggedIn && (
            <Button
              as={Link}
              to="/girisyap"
              className="btn rounded-pill btn-rainbow my-2 ms-2 text-white"
              style={{ backgroundColor: "#181717" }}
              variant="mx-1"
            >
              Giriş Yap
            </Button>
          )}
          {!isLoggedIn && (
            <Button
              as={Link}
              to="/uyeol"
              className="btn rounded-pill btn-rainbow my-2 ms-2 text-white"
              style={{ backgroundColor: "#181717" }}
              variant="mx-1"
            >
              Ücretsiz Üye Ol
            </Button>
          )}

          <NavLink
            to="/bizkimiz"
            as={Link}
            className="fw-bold ms-3 mt-3" activeClassName="active"
          >
            <p className="nav-button-platform">Biz Kimiz?</p>
          </NavLink>

          <NavDropdown
            id="nav-dropdown-dark-example"
            title={
              <span className="fw-bold ms-3 mt-3" activeClassName="active">
                Neler Sunuyoruz?
              </span>
            }
            menuVariant="dark"
            className="mt-3 nav-dropdown-dark-example"
          >
            <NavDropdown.Item className="nav-background" as={Link} to="/bireylericin">
              Bireyler İçin
            </NavDropdown.Item>
            <NavDropdown.Item className="nav-background" as={Link} to="/kurumlaricin">
              Kurumlar İçin
            </NavDropdown.Item>
          </NavDropdown>


          <NavLink
            as={Link}
            to="/katalog"
            className="fw-bold ms-3 mt-3" activeClassName="active"
          >
            <p className="nav-button-platform">Katalog</p>
          </NavLink>

          <NavLink
            as={Link}
            to="/codeacademy"
            className="fw-bold ms-3 mt-3" activeClassName="active"
          >
            <p className="nav-button-platform">Codeacademy</p>
          </NavLink>

          <NavDropdown
            id="nav-dropdown-dark-example"
            title={
              <span className="fw-bold ms-3 mt-3" activeClassName="active">
                Tobeto'da Bu Ay
              </span>
            }
            menuVariant="dark"
            className="mt-3 nav-dropdown-dark-example"
          >
            <NavDropdown.Item as={Link} to="/Blog">
              Blog
            </NavDropdown.Item>
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


          {isLoggedIn && (
            <div className="d-flex align-items-center mt-5 justify-content-around ">
              <NavLink to="/" className="d-block mb-2 mx-1">
                <img src={logo2} style={{ width: "40px", marginRight: "0.8rem" }} alt="Home" />
              </NavLink>
              <Dropdown>
                <Dropdown.Toggle
                  variant="dark"
                  id="dropdown-basic"
                  className="text-dark me-3 d-flex align-items-center rounded-pill btn btn-outline-dark border-light shadow-5 text-muted"
                >
                  <img
                    src={userphoto}
                    alt={`${userDetails.firstName}'s profile`}
                    style={{
                      width: "40px",
                      height: "40px",
                      marginRight: "10px",
                      borderRadius: "50%",
                    }}
                  />
                  {userDetails.firstName + " " + userDetails.lastName}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item onClick={HandleLogout}>
                    Çıkış Yap
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/kisiselbilgiler">Profil Bilgileri</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          )}
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default Header;
