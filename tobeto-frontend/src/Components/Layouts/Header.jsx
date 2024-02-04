import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../Assets/Images/tobeto-white-logo.png";
import userphoto from "../../Assets/Images/user-photo.png"
import { Link, useNavigate } from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../Store/Actions/authActions.js";
import "../../Styles/LayoutStyles/HeaderStyle.css";

const Header = () => {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const userDetails = useSelector(state => state.auth.userDetails);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const HandleLogout = () => {
    dispatch(logout());
    navigate("/girisyap");
  };

  return (
    <div>
      <Navbar expand="sm" style={{backgroundColor:"#181717",marginTop:"70px"}} fixed="top">
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
                className="rounded-pill "
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
                style={{backgroundColor:"#181717"}}
                variant="mx-1"
              >
                Ücretsiz Üye Ol
              </Button>
            )}
            {isLoggedIn && (
              <>
                  <Link  to={"/platform"}><div
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
                    {userDetails.firstName +" "+ userDetails.lastname}
                  </div></Link>
                  {/* <Button className="m-0 btn btn-lg" onClick={HandleLogout}>Çıkış Yap</Button> */}
              </>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
