// ApiConfig.js
import * as ENDPOINTS from "./ApiEndpoints";

// Base API URL path
import API_URL from "./config";

export default {
  AUTH: `${API_URL}${ENDPOINTS.AUTH_ENDPOINT}`, // Auth endpoint: http://localhost:60629/api/Auth

  USERS: `${API_URL}${ENDPOINTS.USERS_ENDPOINT}`, // Users endpoint: http://localhost:60629/api/Users

  REGISTER: `${API_URL}${ENDPOINTS.REGISTER_ENDPOINT}`, // Register endpoint: http://localhost:60629/api/Auth/register

  GET_LIST: `${API_URL}${ENDPOINTS.USERS_ENDPOINT}${ENDPOINTS.GET_LIST_ENDPOINT}`, // Get List endpoint: http://localhost:60629/api/Users/GetList/getlist

  BLOGS: `${API_URL}${ENDPOINTS.BLOG_ENDPOINT}`, // Blog endpoint 'http://localhost:5082/api/Blogs
  BLOG_GET_LIST: `${API_URL}${ENDPOINTS.BLOG_GET_LIST_ENDPOINT}`, // blog_getlist endpoint http://localhost:5082/api/Blogs/getList
  BLOG_DELETE: `${API_URL}${ENDPOINTS.BLOG_DELETE_ENDPOINT}`, // blog_delete endpoint http://localhost:5082/api/Blogs/delete
  BLOG_ADD: `${API_URL}${ENDPOINTS.BLOG_ADD_ENDPOINT}`, //http://localhost:5082/api/Blogs/add
  BLOG_UPDATE: `${API_URL}${ENDPOINTS.BLOG_UPDATE_ENDPOINT}`, //http://localhost:5082/api/Blogs/update
};
