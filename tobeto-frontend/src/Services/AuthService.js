import axios from 'axios';
import { loginFailure, loginRequest, loginSuccess } from '../Store/Actions/authActions';
import { jwtDecode } from 'jwt-decode';
import { fetchUserDetails } from './UserService';


const API_URL = 'http://localhost:5082/api/Auth/login';

export const validateUser = async (email, password) => {
    try {
        const response = await axios.post(API_URL, { email, password });
        console.log('Login response:', response.data);
        console.log('Full API response:', response);
        return response.data; // Burada dönen verinin yapısını kontrol edin
    } catch (error) {
        console.error('Login hatası', error);
        throw error;
    }
};
export const loginUser = async (email, password) => {
    try {
        const response = await validateUser(email, password);
        if (response.token) {
            const decodedToken = jwtDecode(response.token);
            const userId = decodedToken.nameidentifier;
            const userDetails = await fetchUserDetails(userId);
            // Burada kullanıcı detaylarını işleyebilirsiniz
        } else {
            console.error('Token alınamadı');
        }
    } catch (error) {
        console.error('Login hatası', error);
    }
};




