import { fetchUserDetails } from "../../Services/UserService";

export const setUserDetails = (userDetails) => {
    return {
        type: 'SET_USER_DETAILS',
        payload: userDetails,
    };
};
export const getUserDetailsById = (userId) => {
    return async (dispatch) => {
        try {
            const userDetails = await fetchUserDetails(userId,dispatch);
            dispatch(setUserDetails(userDetails));
        } catch (error) {
            console.error('Kullanıcı detayları alınırken hata', error);
        }
    };
};