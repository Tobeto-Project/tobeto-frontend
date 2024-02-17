import axios from 'axios';

const getNotifications = (pageIndex = 0, pageSize = 50) => {
    return axios.get(`http://localhost:5082/api/Notifications/getList`, {
        params: {
            PageIndex: pageIndex,
            PageSize: pageSize
        }
    });
};

export default {
    getNotifications,
};