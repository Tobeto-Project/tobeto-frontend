import React from "react";
import { Button, Navbar } from "react-bootstrap";
import logo from "../../Assets/Images/tobeto-white-logo.png";
import '../../AdminPanel/styles/Header.css'
import { logout } from "../Store/actions/authActions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logout());
    toast.success("cıkış başarılı", {
      autoClose: 50,
      onClose: () => navigate("/admin")

    })
  };
  return (
    <Navbar style={{ backgroundColor: "#9833FF" }} expand="lg">
      <Navbar.Brand href="#home">
        <img style={{ width: "200px" }} className="ms-3" src={logo} alt="" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse
        id="basic-navbar-nav"
        className="d-flex justify-content-end me-4"
      >
        <Navbar.Text className="text-white ">
          Signed in as:{" "}
          <a className="text-white" href="#login">
            Gürkan İlişen
          </a>
          <Button className="mx-3" onClick={handleLogout}>Çıkış Yap</Button>
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
