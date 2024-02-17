import axios from 'axios';

const API_URL = 'http://localhost:5082/api/Notifications';

const getNotifications = (pageIndex = 0, pageSize = 100) => {
    return axios.get(`http://localhost:5082/api/Notifications/getList`, {
        params: {
            PageIndex: pageIndex,
            PageSize: pageSize
        }
    });
};

const addNotification = (title, label) => {
    return axios.post(`http://localhost:5082/api/Notifications/add`, { title, label });
};

const updateNotification = (id, title, label) => {
    return axios.put(`http://localhost:5082/api/Notifications/update`, { id, title, label });
};

const deleteNotification = (id) => {
    return axios.delete(`http://localhost:5082/api/Notifications/delete`, { data: { id } });
};

export default {
    getNotifications,
    addNotification,
    updateNotification,
    deleteNotification,
};
