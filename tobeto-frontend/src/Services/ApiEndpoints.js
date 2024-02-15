// ApiEndpoints.js
export const AUTH_ENDPOINT = "/Auth";
export const USERS_ENDPOINT = "/Users";
export const GET_LIST_ENDPOINT = "/GetList/getlist";
export const REGISTER_ENDPOINT = `${AUTH_ENDPOINT}/register`;
export const USER_DELETE_ENDPOINT = `${USERS_ENDPOINT}/Delete/delete`
export const BLOG_ENDPOINT = "/Blogs";
export const BLOG_GET_LIST_ENDPOINT = `${BLOG_ENDPOINT}/getlist`;
export const BLOG_DELETE_ENDPOINT = `${BLOG_ENDPOINT}/delete`;
export const BLOG_ADD_ENDPOINT = `${BLOG_ENDPOINT}/add`;
export const BLOG_UPDATE_ENDPOINT = `${BLOG_ENDPOINT}/update`;
export const IMAGE_ENDPOINT = "/Images";
export const IMAGE_GET_LIST_ENDPOINT = `${IMAGE_ENDPOINT}/getList`;
export const IMAGE_DELETE_ENDPOINT = `${IMAGE_ENDPOINT}/delete`;
export const IMAGE_ADD_ENDPOINT = `${IMAGE_ENDPOINT}/add`;
export const BLOGSPRESS_ENDPOINT = "/BlogsPress";
export const BLOGSPRESS_ADD_ENDPOINT = `${BLOGSPRESS_ENDPOINT}/add`;
export const BLOGSPRESS_GET_LIST_ENDPOINT = `${BLOGSPRESS_ENDPOINT}/getList`;
export const BLOGSPRESS_DELETE_ENDPOINT = `${BLOGSPRESS_ENDPOINT}/delete`;
export const BLOGPRESS_UPDATE_ENDPOINT = `${BLOGSPRESS_ENDPOINT}/update`;

