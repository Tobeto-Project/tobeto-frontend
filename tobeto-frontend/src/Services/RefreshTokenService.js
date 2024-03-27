// // AuthService.js

// import axios from "axios";
// import { jwtDecode } from "jwt-decode";
// import { fetchUserDetails } from "./UserService";
// import { loginSuccess, logout } from "../Store/Actions/authActions";
// import API_CONFIG from "./ApiConfig";

// const LOGIN_URL = `${API_CONFIG.AUTH}/login`;
// const REFRESH_TOKEN_URL = `${API_CONFIG.AUTH}/refresh-token`;

// let sessionTimeout; // Zamanlayıcıyı saklamak için değişken

// export const validateUser = async (email, password, dispatch) => {
//   try {
//     const response = await axios.post(LOGIN_URL, { email, password });
//     const decodedToken = jwtDecode(response.data.token);
//     const userId =
//       decodedToken[
//         "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"
//       ];
//     const userDetails = await fetchUserDetails(userId, dispatch);
//     dispatch(loginSuccess(decodedToken, userDetails));

//     // Access token ve refresh tokeni çerezlere kaydet
//     setCookie("jwtToken", response.data.token);
//     setCookie("refreshToken", response.data.refreshToken);

//     // Oturum süresini izlemek için zamanlayıcıyı başlat
//     startSessionTimeout(dispatch);

//     return { decodedToken, userDetails };
//   } catch (error) {
//     console.error("Login hatası", error);
//     throw error;
//   }
// };

// export const refreshAccessToken = async () => {
//   try {
//     const refreshToken = getCookie("refreshToken");
//     const response = await axios.post(REFRESH_TOKEN_URL, { refreshToken });

//     if (response.status === 200) {
//       const newAccessToken = response.data.token;
//       const expiration = response.data.expiration; // Yeni tokenin son kullanma tarihi

//       // Yeni access tokeni çerezlere kaydet
//       setCookie("jwtToken", newAccessToken);
//       // Yeni refresh tokeni çerezlere kaydet
//       setCookie("refreshToken", response.data.refreshToken);

//       // Yeni access tokenin son kullanma tarihini döndür
//       return { newAccessToken, expiration };
//     } else {
//       throw new Error(
//         "Yeni access token alınamadı. Sunucudan yanıt alınamadı."
//       );
//     }
//   } catch (error) {
//     console.error("Yeni access token alınamadı. Hata:", error);
//     throw error;
//   }
// };

// // Oturum süresini izlemek için zamanlayıcıyı başlat
// const startSessionTimeout = (dispatch) => {
//   // Oturumun süresi, örneğin 2 dakika (120000 milisaniye) olarak ayarlanmıştır
//   const sessionDuration = 120000;

//   // Oturum zaman aşımı süresi (2 dakika sonra) geçtikten sonra oturumu sonlandır
//   sessionTimeout = setTimeout(() => {
//     console.log("Oturum süresi doldu, oturum sonlandırılıyor...");
//     dispatch(logout());
//     clearTimeout(sessionTimeout); // Zamanlayıcıyı temizle
//   }, sessionDuration);
// };

// // Oturum zaman aşımını sıfırla (örneğin, kullanıcı bir işlem yaparsa)
// export const resetSessionTimeout = () => {
//   clearTimeout(sessionTimeout);
//   startSessionTimeout();
// };

// // Oturumu sonlandır
// export const endSession = () => {
//   clearTimeout(sessionTimeout);
//   // Oturumu sonlandırma işlemleri, örneğin logout() fonksiyonunu çağırabilirsiniz
//   // Örneğin:
//   // dispatch(logout());
// };

// // Çerez değeri almak için yardımcı fonksiyon
// function getCookie(name) {
//   const value = `; ${document.cookie}`;
//   const parts = value.split(`; ${name}=`);
//   if (parts.length === 2) return parts.pop().split(";").shift();
// }

// // Çerez değeri ayarlamak için yardımcı fonksiyon
// function setCookie(name, value, days = 7, path = "/") {
//   const expires = new Date(Date.now() + days * 864e5).toUTCString();
//   document.cookie = `${name}=${encodeURIComponent(
//     value
//   )}; expires=${expires}; path=${path}`;
// }
