// ExperienceService.js

import axios from 'axios';

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
