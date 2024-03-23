// AdminLogin.jsx
import React, { useState } from "react";
import { useDispatch } from 'react-redux';

import '../../AdminPanel/styles/AdminLoginStyle.css';
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import { login } from "../Store/actions/authActions";

const AdminLogin = ({ setIsAuthenticated }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      await dispatch(login(email, password));
      setIsAuthenticated(true);
      toast.success("Giriş Başarılı.", {
        autoClose: 50,
        onClose: () => navigate('/adminpanel')
      });
    } catch (error) {
      toast.error("Login işlemi sırasında bir hata oluştu!");
    }
  };

  return (
    <div className="admin-body ">
      <div className="wrapper ">
        <div className="card">
          <form action="#" className="d-flex flex-column " onSubmit={handleLogin}>
            <div className="h3 text-center text-white">Tobeto Admin</div>
            <div className="d-flex align-items-center input-field my-3">
              <span className="far fa-user p-2" />
              <input
                type="text"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
              />
            </div>
            <div className="d-flex align-items-center input-field">
              <span className="fas fa-lock p-2" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
                className="form-control"
                id="pwd"
              />
              <button className="btn">
                <span className="fas fa-eye-slash" />
              </button>
            </div>
            <div className="">
              <input
                type="submit"
                defaultValue="Gönder"
                className="btn btn-primary"
              />
            </div>
          </form>
        </div>
      </div>
      <ToastContainer position="bottom-right" autoClose={2000} />
    </div>
  );
};

export default AdminLogin;
