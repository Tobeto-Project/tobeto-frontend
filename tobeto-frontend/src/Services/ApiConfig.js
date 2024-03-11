// ApiConfig.js
import * as ENDPOINTS from "./ApiEndpoints";

// Base API URL path
import API_URL from "./config";

export default {
  AUTH: `${API_URL}${ENDPOINTS.AUTH_ENDPOINT}`, // Auth endpoint: http://localhost:5082/api/Auth

  USERS: `${API_URL}${ENDPOINTS.USERS_ENDPOINT}`, // Users endpoint: http://localhost:5082/api/Users

  REGISTER: `${API_URL}${ENDPOINTS.REGISTER_ENDPOINT}`, // Register endpoint: http://localhost:5082/api/Auth/register

  GET_LIST: `${API_URL}${ENDPOINTS.USERS_ENDPOINT}${ENDPOINTS.GET_LIST_ENDPOINT}`, // Get List endpoint: http://localhost:5082/api/Users/GetList/getlist
  USER_DELETE: `${API_URL}${ENDPOINTS.USER_DELETE_ENDPOINT}`, //http://localhost:5082/api/Users/Delete/delete`

  BLOGS: `${API_URL}${ENDPOINTS.BLOG_ENDPOINT}`, // Blog endpoint 'http://localhost:5082/api/Blogs
  BLOG_GET_LIST: `${API_URL}${ENDPOINTS.BLOG_GET_LIST_ENDPOINT}`, // blog_getlist endpoint http://localhost:5082/api/Blogs/getList
  BLOG_DELETE: `${API_URL}${ENDPOINTS.BLOG_DELETE_ENDPOINT}`, // blog_delete endpoint http://localhost:5082/api/Blogs/delete
  BLOG_ADD: `${API_URL}${ENDPOINTS.BLOG_ADD_ENDPOINT}`, //http://localhost:5082/api/Blogs/add
  BLOG_UPDATE: `${API_URL}${ENDPOINTS.BLOG_UPDATE_ENDPOINT}`, //http://localhost:5082/api/Blogs/update

  IMAGES: `${API_URL}${ENDPOINTS.IMAGE_ENDPOINT}`, //http://localhost:5082/api/Images
  IMAGE_GET_LIST: `${API_URL}${ENDPOINTS.IMAGE_GET_LIST_ENDPOINT}`, //http://localhost:5082/api/Images/getList
  IMAGE_ADD: `${API_URL}${ENDPOINTS.IMAGE_ADD_ENDPOINT}`, ////http://localhost:5082/api/Images/add
  IMAGE_DELETE: `${API_URL}${ENDPOINTS.IMAGE_DELETE_ENDPOINT}`, ////http://localhost:5082/api/Images/delete

  BLOGSPRESS: `${API_URL}${ENDPOINTS.BLOGSPRESS_ENDPOINT}`, //http://localhost:5082/api/BlogsPress
  BLOGSPRESS_GET_LIST: `${API_URL}${ENDPOINTS.BLOGSPRESS_GET_LIST_ENDPOINT}`, //http://localhost:5082/api/BlogsPress/getList
  BLOGSPRESS_ADD: `${API_URL}${ENDPOINTS.BLOGSPRESS_ADD_ENDPOINT}`, //http://localhost:5082/api/BlogsPress/add
  BLOGSPRESS_DELETE: `${API_URL}${ENDPOINTS.BLOGSPRESS_DELETE_ENDPOINT}`, //http://localhost:5082/api/BlogsPress/delete
  BLOGSPRESS_UPDATE: `${API_URL}${ENDPOINTS.BLOGPRESS_UPDATE_ENDPOINT}`, //http://localhost:5082/api/BlogsPress/update

  NOTIFICATIONS: `${API_URL}${ENDPOINTS.NOTIFICATIONS_ENDPOINT}`, //http://localhost:5082/api/Notifications
  NOTIFICATIONS_GET_LIST: `${API_URL}${ENDPOINTS.NOTIFICATIONS_GETLIST_ENDPOINT}`, //http://localhost:5082/api/Notifications/getList
  NOTIFICATIONS_ADD: `${API_URL}${ENDPOINTS.NOTIFICATIONS_ADD_ENDPOINT}`, //http://localhost:5082/api/Notifications/add
  NOTIFICATIONS_UPDATE: `${API_URL}${ENDPOINTS.NOTIFICATIONS_UPDATE_ENDPOINT}`, //http://localhost:5082/api/Notifications/update
  NOTIFICATIONS_DELETE: `${API_URL}${ENDPOINTS.NOTIFICATIONS_DELETE_ENDPOINT}`, //http://localhost:5082/api/Notifications/delete

  ADMIN_NOTIFICATIONS: `${API_URL}${ENDPOINTS.ADMIN_NOTIFICATIONS_ENDPOINT}`, //http://localhost:5082/api/Notifications
  ADMIN_NOTIFICATIONS_GET_LIST: `${API_URL}${ENDPOINTS.ADMIN_NOTIFICATIONS_GETLIST_ENDPOINT}`, //http://localhost:5082/api/Notifications/getList
  ADMIN_NOTIFICATIONS_ADD: `${API_URL}${ENDPOINTS.ADMIN_NOTIFICATIONS_ADD_ENDPOINT}`, //http://localhost:5082/api/Notifications/add
  ADMIN_NOTIFICATIONS_UPDATE: `${API_URL}${ENDPOINTS.ADMIN_NOTIFICATIONS_UPDATE_ENDPOINT}`, //http://localhost:5082/api/Notifications/update
  ADMIN_NOTIFICATIONS_DELETE: `${API_URL}${ENDPOINTS.ADMIN_NOTIFICATIONS_DELETE_ENDPOINT}`, //http://localhost:5082/api/Notifications/delete

  INSTRUCTORS: `${API_URL}${ENDPOINTS.INSTRUCTORS_ENDPOINT}`, //http://localhost:5082/api/Instructors
  INSTRUCTORS_GETLIST: `${API_URL}${ENDPOINTS.INSTRUCTORS_GETLIST_ENDPOINT}`, //http://localhost:5082/api/Instructors/getList
  INSTRUCTORS_DELETE: `${API_URL}${ENDPOINTS.INSTRUCTORS_DELETE_ENDPOINT}`, //http://localhost:5082/api/Instructors/delete

  AUTH_INSTRUCTORS: `${API_URL}${ENDPOINTS.AUTH_INSTRUCTOR_ENDPOINT}`, //http://localhost:5082/api/AuthInstructor
  AUTH_INSTRUCTORS_REGISTER: `${API_URL}${ENDPOINTS.AUTH_INSTRUCTOR_REGISTER_ENDPOINT}`, //http://localhost:5082/api/AuthInstructor/register
  EMPLOYEES: `${API_URL}${ENDPOINTS.EMPLOYEE_ENDPOINT}`, //http://localhost:5082/api/Employee
  EMPLOYEES_GETLIST: `${API_URL}${ENDPOINTS.EMPLOYEE_GETLIST_ENDPOINT}`, //http://localhost:5082/api/Employee/getList
  EMPLOYEES_DELETE: `${API_URL}${ENDPOINTS.EMPLOYEE_DELETE_ENDPOINT}`, //http://localhost:5082/api/Employee/delete

  AUTH_EMPLOYEES: `${API_URL}${ENDPOINTS.AUTH_EMPLOYEE_ENDPOINT}`, //http://localhost:5082/api/AuthEmployee
  AUTH_EMPLOYEES_REGISTER: `${API_URL}${ENDPOINTS.AUTH_EMPLOYEE_REGISTER_ENDPOINT}`, //http://localhost:5082/api/AuthEmployee/register

  CONTACT_INFORMATIONS: `${API_URL}${ENDPOINTS.CONTACT_INFORMATIONS_ENDPOINT}`, //http://localhost:5082/api/ContactInformations
  CONTACT_INFORMATIONS_GETLIST: `${API_URL}${ENDPOINTS.CONTACT_INFORMATIONS_GETLIST_ENDPOINT}`, //http://localhost:5082/api/ContactInformations/getList
  CONTACT_INFORMATIONS_UPDATE: `${API_URL}${ENDPOINTS.CONTACT_INFORMATIONS_UPDATE_ENDPOINT}`, //http://localhost:5082/api/ContactInformations/update

  EXPERIENCES: `${API_URL}${ENDPOINTS.EXPERIENCES_ENDPOINT}`, //http://localhost:5082/api/Experiences
  EXPERIENCES_ADD: `${API_URL}${ENDPOINTS.EXPERIENCES_ADD_ENDPOINT}`, //http://localhost:5082/api/Experiences/add

  EXAMS: `${API_URL}${ENDPOINTS.EXAMS_ENDPOINT}`,
  EXAMS_ADD:`${API_URL}${ENDPOINTS.EXAMS_ADD_ENDPOINT}`,
  EXAMS_GET_LIST:`${API_URL}${ENDPOINTS.GET_LIST_ENDPOINT}`,
  EXAM_DELETE: `${API_URL}${ENDPOINTS.EXAM_DELETE}`,

};
