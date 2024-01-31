// ApiConfig.js
import * as ENDPOINTS from "./ApiEndpoints";

// Base API URL path
import API_URL from "./config";

export default {
  AUTH: `${API_URL}${ENDPOINTS.AUTH_ENDPOINT}`, // Auth endpoint: http://localhost:60629/api/Auth

  USERS: `${API_URL}${ENDPOINTS.USERS_ENDPOINT}`, // Users endpoint: http://localhost:60629/api/Users

  REGISTER: `${API_URL}${ENDPOINTS.REGISTER_ENDPOINT}`, // Register endpoint: http://localhost:60629/api/Auth/register

  GET_LIST: `${API_URL}${ENDPOINTS.USERS_ENDPOINT}${ENDPOINTS.GET_LIST_ENDPOINT}`, // Get List endpoint: http://localhost:60629/api/Users/GetList/getlist
};
