import axios from 'axios';

const API_URL = 'http://localhost:5082/api/Auth/login';

export const validateUser = async (email, password) => {
    try {
        const response = await axios.post(API_URL, {
            email,
            password
        });
        return response.data;
    } catch (error) {
        console.error('Login hatası', error);
        throw error;
    }
};
