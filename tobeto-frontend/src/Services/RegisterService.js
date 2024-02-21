//ResgisterService.js
import axios from 'axios';
import API_CONFIG from "./ApiConfig";
import * as ENDPOINTS from "./ApiEndpoints";


export const register = async (userData) => {
  try {
    const response = await axios.post(API_CONFIG.REGISTER, userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};