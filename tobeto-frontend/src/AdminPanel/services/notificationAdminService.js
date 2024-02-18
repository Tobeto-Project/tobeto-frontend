import axios from 'axios';
import API_CONFIG from "../../Services/ApiConfig";

const getNotifications = (pageIndex = 0, pageSize = 100) => {
    return axios.get(`${API_CONFIG.ADMIN_NOTIFICATIONS_GET_LIST}`, {
        params: {
            PageIndex: pageIndex,
            PageSize: pageSize
        }
    });
};

const addNotification = (title, label) => {
    return axios.post(`${API_CONFIG.ADMIN_NOTIFICATIONS_ADD}`, { title, label });
};

const updateNotification = (id, title, label) => {
    return axios.put(`${API_CONFIG.ADMIN_NOTIFICATIONS_UPDATE}`, { id, title, label });
};

const deleteNotification = (id) => {
    return axios.delete(`${API_CONFIG.ADMIN_NOTIFICATIONS_DELETE}`, { data: { id } });
};

export default {
    getNotifications,
    addNotification,
    updateNotification,
    deleteNotification,
};
