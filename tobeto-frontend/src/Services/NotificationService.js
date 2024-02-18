import axios from 'axios';
import API_CONFIG from './ApiConfig';


const getNotifications = (pageIndex = 0, pageSize = 50) => {
    return axios.get(`${API_CONFIG.NOTIFICATIONS_GET_LIST}`, {
        params: {
            PageIndex: pageIndex,
            PageSize: pageSize
        }
    });
};

export default {
    getNotifications,
};