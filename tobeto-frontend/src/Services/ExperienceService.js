import axios from 'axios';

const API_BASE_URL = "http://localhost:5082/api";


// Deneyim eklemek için servis fonksiyonu
export const addExperience = async (experienceData) => {
    try {
        const response = await axios.post(`http://localhost:5082/api/Experiences/add`, experienceData);
        return response.data; // Başarılı bir şekilde ekleme işlemi gerçekleşirse dönen veri
    } catch (error) {
        throw error; // Hata durumunda hata bilgisini fırlat
    }
};

export const getExperiencesByUser = async (userId) => {
    try {
      const response = await fetch(`http://localhost:5082/api/Experiences/getListByUser?id=${userId}`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
        },
      });
  
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
  