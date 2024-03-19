//UserServices.js
import axios from "axios";
import { setUserDetails } from "../Store/Actions/userActions";
import API_CONFIG from "./ApiConfig";
import * as ENDPOINTS from "./ApiEndpoints";
import API_URL from "./config";

export const getUserDetailsById = async (userId) => {
  try {
    const response = await axios.get(
      `${API_CONFIG.USERS}${ENDPOINTS.GET_LIST_ENDPOINT}?PageIndex=0&PageSize=100`
    );
    const user = response.data.items.find((u) => u.id === userId);
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
// Kullanıcıyı güncellemek için servis fonksiyonu
export const updateUserDetails = async (userData) => {
  const url = `${API_URL}/Users/Update/update`;
  try {
    const response = await axios.put(url, userData, {
      headers: {
        "Content-Type": "application/json",
        accept: "*/*",
      },
    });
    return response.data; // Güncelleme işlemi başarılıysa, yanıtı döndür
  } catch (error) {
    throw error; // Hata oluşursa, hatayı fırlat
  }
};

// Dosya yüklemek için servis fonksiyonu
 export const uploadImage = (imageFile) => {
    const formData = new FormData();
    formData.append("File", imageFile);

    return fetch(`${API_CONFIG.IMAGE_ADD}`, {
      method: "POST",
      body: formData,
    }).then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    });
  };

  export const getImageList = async () => {
    try {
      const response = await axios.get(
        `${API_URL}/Images/getList?PageIndex=0&PageSize=15`
      );
      return response.data.items;
    } catch (error) {
      throw error;
    }
  };







