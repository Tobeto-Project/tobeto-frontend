// actions/authActions.js
import { LOGIN_SUCCESS, LOGIN_FAILURE } from "./type";
import { jwtDecode } from "jwt-decode";
import API_URL from "../../../Services/config";

const API_BASE_URL = API_URL;

export const login = (email, password) => async (dispatch) => {
  try {
    const response = await fetch(`${API_BASE_URL}/AuthEmployee/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (response.ok) {
      const decodedToken = jwtDecode(data.token);

      dispatch({
        type: LOGIN_SUCCESS,
        payload: { token: data.token, user: decodedToken },
      });

      return data; // Başarılı giriş durumunda veriyi döndür
    } else {
      throw new Error(data.error); // Hata durumunda hatayı fırlat
    }
  } catch (error) {
    throw error; // Hata durumunda hatayı fırlat
  }
};

export const logout = () => {
  return async (dispatch) => {
    // Oturum bilgilerini temizle
    dispatch({ type: "LOGOUT" });
    // Oturum bilgilerini yerel depolamadan temizle (opsiyonel)
    localStorage.removeItem("authToken"); 
  };
};
