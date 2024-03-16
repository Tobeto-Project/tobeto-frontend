import axios from "axios";
import API_CONFIG from "../../Services/ApiConfig";

const fetchData = async () => {
  try {
    const languagesResponse = await axios.get(
      `${API_CONFIG.FOREIGN_LANGUAGE_GET_LIST}?PageIndex=0&PageSize=15`
    );
    const levelsResponse = await axios.get(
      `${API_CONFIG.FOREIGN_LANGUAGE_LEVEL_GET_LIST}?PageIndex=0&PageSize=15`
    );
    return {
      languages: languagesResponse.data.items,
      levels: levelsResponse.data.items,
    };
  } catch (error) {
    throw new Error("Error fetching data:", error);
  }
};

const addLanguage = async (languageName) => {
  try {
    const response = await axios.post(`${API_CONFIG.FOREIGN_LANGUAGE_ADD}`, {
      Name: languageName,
    });
    return response.data;
  } catch (error) {
    throw new Error("Error adding language:", error);
  }
};

const addLanguageLevel = async (levelName) => {
  try {
    const response = await axios.post(
      `${API_CONFIG.FOREIGN_LANGUAGE_LEVEL_ADD}`,
      { Name: levelName }
    );
    return response.data;
  } catch (error) {
    throw new Error("Error adding language level:", error);
  }
};

const deleteLanguage = async (id) => {
  try {
    await axios.delete(`${API_CONFIG.FOREIGN_LANGUAGE_DELETE}`, {
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        Id: id,
      },
    });
  } catch (error) {
    throw new Error("Error deleting language:", error);
  }
};

const deleteLanguageLevel = async (id) => {
  try {
    await axios.delete(`${API_CONFIG.FOREIGN_LANGUAGE_LEVEL_DELETE}`, {
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        Id: id,
      },
    });
  } catch (error) {
    throw new Error("Error deleting language level:", error);
  }
};

export {
  fetchData,
  addLanguage,
  addLanguageLevel,
  deleteLanguage,
  deleteLanguageLevel,
};
