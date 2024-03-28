import axios from "axios";
import API_CONFIG from "./ApiConfig";
import API_URL from "./config";

const API_BASE_URL = API_URL;

// Deneyim eklemek için servis fonksiyonu
export const addExperience = async (experienceData) => {
  try {
    const response = await axios.post(
      `${API_CONFIG.EXPERIENCES_ADD}`,
      experienceData
    );
    return response.data; // Başarılı bir şekilde ekleme işlemi gerçekleşirse dönen veri
  } catch (error) {
    throw error; // Hata durumunda hata bilgisini fırlat
  }
};

export const getExperiencesByUser = async (userId) => {
  try {
    const response = await fetch(
      `${API_CONFIG.EXPERIENCES}/getListByUser?id=${userId}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Server error: ${errorText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Failed to fetch experiences:", error);
    throw error; // Hatanın üst katmanlara iletilebilmesi için
  }
};

export const deleteExperienceById = async (experienceId) => {
  try {
    const response = await axios.delete(`http://localhost:60629/api/Experiences/delete`, {
      data: { id: experienceId }, // Silinecek deneyimin kimliği
      headers: { "Content-Type": "application/json" },
    });
    return response.data; // Başarılı bir şekilde silme işlemi gerçekleşirse dönen veri
  } catch (error) {
    throw error; // Hata durumunda hata bilgisini fırlat
  }
};
