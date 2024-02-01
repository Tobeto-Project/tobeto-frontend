import React, { useState } from "react";
import '../../AdminPanel/styles/AdminLoginStyle.css';
import { useNavigate } from "react-router-dom";
import { validateAdmin } from "../services/adminService";
import { toast, ToastContainer } from 'react-toastify';

const AdminLogin = ({ setIsAuthenticated }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault(); 
    if (validateAdmin(username, password)) {
      setIsAuthenticated(true);
      toast.success("Giriş Başarılı.", {
        autoClose: 50,
        onClose: () => navigate('/adminpanel') // Toast kapanınca yönlendirme yap
      });
    } else {
      toast.error("Login işlemi sırasında bir hata oluştu!");
    }
  };

  return (
    <div className="admin-body ">
    <div className="wrapper ">
      <div className="card btn-rainbow-card">
        <form action="#" className="d-flex flex-column " onSubmit={handleLogin}>
          <div className="h3 text-center text-white">Tobeto Admin</div>
          <div className="d-flex align-items-center input-field my-3">
            <span className="far fa-user p-2" />
            <input
              type="text"
              placeholder="Username or Email"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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
