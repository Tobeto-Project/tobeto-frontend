import axios from 'axios';

const API_URL = "http://localhost:60629/api/Auth/";

export const register = async (userData) => {
    try {
        const response = await axios.post(API_URL + 'register', userData);
        return response.data;
    } catch (error) {
        throw error;
    }
};