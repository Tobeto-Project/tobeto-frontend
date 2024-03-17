import axios from 'axios';
import API_URL from './config';

const BASE_URL = API_URL;

export const fetchCompetenceList = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/Skills/getlist?PageIndex=0&PageSize=15`);
    return response.data.items;
  } catch (error) {
    console.error('Error fetching competence list:', error);
    throw error;
  }
};

export const fetchUserCompetences = async (userId) => {
  try {
    const response = await axios.get(`${BASE_URL}/UserSkills/getListByUser?id=${userId}`);
    return response.data.items;
  } catch (error) {
    console.error('Error fetching user competences:', error);
    throw error;
  }
};

export const addCompetence = async (userId, skillId) => {
  try {
    await axios.post(`${BASE_URL}/UserSkills/add`, {
      userId: userId,
      skillId: skillId
    });
  } catch (error) {
    console.error('Error adding competence:', error);
    throw error;
  }
};

export const deleteCompetence = async (competenceId) => {
  try {
    await axios.delete(`${BASE_URL}/UserSkills/delete`, {
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        id: competenceId
      },
    });
  } catch (error) {
    console.error('Error deleting competence:', error);
    throw error;
  }
};
