//UserServices.js
import axios from "axios";
import { setUserDetails } from "../Store/Actions/userActions";
import API_CONFIG from "./ApiConfig";
import * as ENDPOINTS from "./ApiEndpoints";

export const getUserDetailsById = async (userId) => {
  try {
    console.log("UserService userId", userId);
    const response = await axios.get(
      `${API_CONFIG.USERS}${ENDPOINTS.GET_LIST_ENDPOINT}?PageIndex=0&PageSize=15`
    );
    const user = response.data.items.find(u => u.id === userId);
    return user;
  } catch (error) {
    throw error;
  }
};

export const fetchUserDetails = async (userId, dispatch) => {
  try {
    const userDetails = await getUserDetailsById(userId);
    dispatch(setUserDetails(userDetails));
    return userDetails;
  } catch (error) {
    console.error("Kullanıcı bilgileri alınırken hata", error);
  }
};
