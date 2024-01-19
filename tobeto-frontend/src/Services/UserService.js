import axios from 'axios';

// Kullanıcıların listesini almak için kullanılır
export const getUserDetailsById = async (userId) => {
    try {
        const response = await axios.get('http://localhost:5082/api/Users/GetList/getlist?PageIndex=0&PageSize=15');
        const user = response.data.items.find(u => u.id === userId);
        return user;
    } catch (error) {
        throw error;
    }
};

// Redux'a kullanıcı detaylarını dispatch etmek için kullanılır
export const fetchUserDetails = (userId) => {
    return async (dispatch) => {
        try {
            const userDetails = await getUserDetailsById(userId);
            dispatch(setUserDetails(userDetails));
        } catch (error) {
            console.error('Kullanıcı bilgileri alınırken hata', error);
        }
    };
};

// Kullanıcı detaylarını Redux state'ine eklemek için kullanılır
export const setUserDetails = (userDetails) => {
    return {
        type: 'SET_USER_DETAILS',
        payload: userDetails,
    };
};
