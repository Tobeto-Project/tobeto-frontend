import axios from "axios";
import API_CONFIG from "./ApiConfig";

export const fetchLanguages = async () => {
  try {
    const response = await axios.get(
      `${API_CONFIG.FOREIGN_LANGUAGE_GET_LIST}?PageIndex=0&PageSize=15`
    );
    return response.data.items;
  } catch (error) {
    console.error("Error fetching languages:", error);
    throw error;
  }
};

export const fetchLevels = async () => {
  try {
    const response = await axios.get(
      `${API_CONFIG.FOREIGN_LANGUAGE_LEVEL_GET_LIST}?PageIndex=0&PageSize=15`
    );
    return response.data.items;
  } catch (error) {
    console.error("Error fetching levels:", error);
    throw error;
  }
};

export const fetchUserLanguages = async (userId) => {
  try {
    const response = await axios.get(
      `${API_CONFIG.USER_LANGUAGE_GET_LIST_BY_USER}?id=${userId}`
    );
    return response.data.items;
  } catch (error) {
    console.error("Error fetching user languages:", error);
    throw error;
  }
};

export const addUserLanguage = async (userId, languageId, levelId) => {
  try {
    await axios.post(`${API_CONFIG.USER_LANGUAGE_ADD}`, {
      UserId: userId,
      ForeignLanguageId: languageId,
      ForeignLanguageLevelId: levelId,
    });
    console.log("Kullanıcı dil bilgisi başarıyla eklendi");
  } catch (error) {
    console.error("Error adding user language:", error);
    throw error;
  }
};

export const deleteUserLanguage = async (userLanguageId) => {
  try {
    const response = await axios.delete(`${API_CONFIG.USER_LANGUAGE_DELETE}`, {
      data: { Id: userLanguageId },
    });
    return response.data;
  } catch (error) {
    console.error("Error deleting user language:", error);
    throw error;
  }
};