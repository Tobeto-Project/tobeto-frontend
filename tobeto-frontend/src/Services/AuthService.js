import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { fetchUserDetails } from "./UserService";
import { loginSuccess } from "../Store/Actions/authActions";

const API_URL = "http://localhost:60629/api/Auth/login";

export const validateUser = async (email, password, dispatch) => {
  try {
    const response = await axios.post(API_URL, { email, password });
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
