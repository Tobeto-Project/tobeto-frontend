// ExperienceService.js

import axios from 'axios';

const API_BASE_URL = "http://localhost:5082/api";


// Deneyim eklemek için servis fonksiyonu
export const addExperience = async (experienceData) => {
  try {
    const response = await axios.post('http://localhost:5082/api/Experiences/add', experienceData, {
      headers: {
        'Content-Type': 'application/json',
        'accept': '*/*'
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
