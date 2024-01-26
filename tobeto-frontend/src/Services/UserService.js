import axios from 'axios';
import { setUserDetails } from '../Store/Actions/userActions';

// Kullanıcıların listesini almak için kullanılır
export const getUserDetailsById = async (userId) => {
    try {
        const response = await axios.get('http://localhost:5082/api/Users/GetList/getlist?PageIndex=0&PageSize=15');
        console.log("response",response)
        const user = response.data.items.find(u => u.id === userId);
        return user;
    } catch (error) {
        throw error;
    }
};

export const fetchUserDetails = async (userId, dispatch) => {
    try {
        const userDetails = await getUserDetailsById(userId);
        dispatch(setUserDetails(userDetails)); // dispatch ile Redux action'ını çağır
        return userDetails;
    } catch (error) {
        console.error('Kullanıcı bilgileri alınırken hata', error);
    }
};


