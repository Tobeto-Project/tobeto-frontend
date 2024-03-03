import axios from 'axios';
import API_CONFIG from './ApiConfig';

const getContactInformation = async () => {
  try {
    const response = await axios.get(`${API_CONFIG.CONTACT_INFORMATIONS_GETLIST}?PageIndex=0&PageSize=1`);
    return response.data;
  } catch (error) {
    console.error('Error fetching contact information:', error);
    throw error;
  }
};

const updateContactInformation = async (contactData) => {
  try {
    const response = await axios.put(`${API_CONFIG.CONTACT_INFORMATIONS_UPDATE}`, contactData);
    return response.data;
  } catch (error) {
    console.error('Error updating contact information:', error);
    throw error;
  }
};

export { getContactInformation, updateContactInformation };
