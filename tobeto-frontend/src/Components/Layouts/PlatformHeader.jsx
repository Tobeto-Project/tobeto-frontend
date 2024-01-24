import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../../Styles/LayoutStyles/PlatformHeaderStyle.css";
import logo from "../../Assets/Images/tobeto-black.png";
import logo2 from "../../Assets/Images/platform-tobeto-icon.svg";
import userphoto from "../../Assets/Images/user-photo.png"
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../Store/Actions/authActions.js";
import { Dropdown } from "react-bootstrap";

const PlatformHeader = () => {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const userDetails = useSelector(state => state.auth.userDetails);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/girisyap");
  };

  return (
    <div>
      <Navbar expand="sm" bg="white">
        <Container fluid>
          <Navbar.Brand href="#home">
            <Link to="/platform">
              <img src={logo} className="navbar-img-platform" alt="Logo" />
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
                to="/platform"
                className="fw-bold ms-3 d-none d-xl-inline-block mt-3"
              >
                <p className="nav-button-platform">Anasayfa</p>
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/degerlendirmeler"
                className="fw-bold ms-3 d-none d-xl-inline-block mt-3"
              >
                <p className="nav-button-platform">Değerlendirmeler</p>
              </Nav.Link>

              <Nav.Link
                as={Link}
                to="/profil"
                className="text-white fw-bold ms-3 d-none d-xl-inline-block mt-3"
              >
                <p className="nav-button-platform">Profilim</p>
              </Nav.Link>

              <Nav.Link
                as={Link}
                to="/platform-katalog"
                className="text-white fw-bold  ms-3 d-none d-xl-inline-block  mt-3"
              >
                <p className="nav-button-platform">Katalog</p>
              </Nav.Link>

              <Nav.Link
                as={Link}
                to="/platform-takvim"
                className="text-white fw-bold ms-3 d-none d-xl-inline-block mt-3"
              >
                <p className="nav-button-platform">Takvim</p>
              </Nav.Link>

              <Nav.Link
                as={Link}
                to="/Istanbulkodluyor"
                className="text-white fw-bold ms-3 d-none d-xl-inline-block mt-3"
              >
                <p className="nav-button-platform">İstanbul Kodluyor</p>
              </Nav.Link>
            </Nav>
            {isLoggedIn && (
              <>
                <Link to="/">
                  <img
                    src={logo2}
                    style={{ width: "40px", marginRight: "0.8rem" }}
                  />
                </Link>
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
                      }} // Profil resmi için stil
                    />
                  {userDetails.firstName +" "+ userDetails.lastname}
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item onClick={handleLogout}>
                      Çıkış Yap
                    </Dropdown.Item>
                    <Dropdown.Item as={Link} to="/kisiselbilgiler">Profil Bilgileri</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default PlatformHeader;
