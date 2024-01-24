import React from "react";
import '../../AdminPanel/styles/AdminLoginStyle.css';

const AdminLogin = () => {
  return (
    <div className="admin-body">
    <div className="wrapper">
      <div className="card">
        <form action="#" className="d-flex flex-column">
          <div className="h3 text-center text-white">Tobeto Admin</div>
          <div className="d-flex align-items-center input-field my-3">
            <span className="far fa-user p-2" />
            <input
              type="text"
              placeholder="Username or Email"
              required
              className="form-control"
            />
          </div>
          <div className="d-flex align-items-center input-field">
            <span className="fas fa-lock p-2" />
            <input
              type="password"
              placeholder="Password"
              required
              className="form-control"
              id="pwd"
            />
            <button className="btn" onclick="showPassword()">
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
    </div>
  );
};

export default AdminLogin;
