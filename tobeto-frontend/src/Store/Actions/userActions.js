//userActions.js
import {
  loginSuccess,
  loginFailure,
  logout,
} from "./authActions";
import { fetchUserDetails } from "../../Services/UserService";
import { jwtDecode } from "jwt-decode";


export const setUserDetails = (userDetails) => {
    return {
        type: 'SET_USER_DETAILS',
        payload: userDetails,
    };
};
export const getUserDetailsById = (userId) => {
    return async (dispatch) => {
        try {
            const userDetails = await fetchUserDetails(userId,dispatch);
            dispatch(setUserDetails(userDetails));
        } catch (error) {
            console.error('Kullanıcı detayları alınırken hata', error);
        }
    };
};

export const checkTokenAndLogin = () => {
  return async (dispatch) => {
 
    const jwtToken = localStorage.getItem("jwtToken");

    if (jwtToken) {
      try {

        const decodedToken = jwtDecode(jwtToken);
        const userId =
          decodedToken[
            "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"
          ];
        const userDetails = await fetchUserDetails(userId, dispatch);

        dispatch(loginSuccess(decodedToken, userDetails));
      } catch (error) {
        console.error("Token geçerliliğini kontrol ederken hata", error);
        dispatch(
          loginFailure("Token geçerliliğini kontrol ederken hata oluştu.")
        );
      }
    } else {
  
      dispatch(logout());
    }
  };
};