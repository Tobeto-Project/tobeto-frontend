//AuthService.js

import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { fetchUserDetails } from "./UserService";
import { loginSuccess } from "../Store/Actions/authActions";
import API_CONFIG from "./ApiConfig";

const LOGIN_URL = `${API_CONFIG.AUTH}/login`;

export const validateUser = async (email, password, dispatch) => {
  try {
    const response = await axios.post(LOGIN_URL, { email, password });
    const decodedToken = jwtDecode(response.data.token);
    const userId =
      decodedToken[
        "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"
      ];
    const userDetails = await fetchUserDetails(userId, dispatch);
    dispatch(loginSuccess(decodedToken, userDetails));
    localStorage.setItem("jwtToken", response.data.token);
    return { decodedToken, userDetails };
  } catch (error) {
    console.error("Login hatası", error);
    throw error;
  }
};
