// src/Routes/PrivateRoute.jsx

import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ children }) => {
  const { isLoggedIn } = useSelector((state) => state.auth);

  return isLoggedIn ? children : <Navigate to="/girisyap" replace />;
};

export default PrivateRoute;
