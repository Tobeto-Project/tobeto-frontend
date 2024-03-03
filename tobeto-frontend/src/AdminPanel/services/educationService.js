import API_URL from "../../Services/config"
import axios from "axios";


const API_BASE_URL = API_URL;

const educationService = {
  getCourseTypes: async () => {
    try {
      const response = await axios.get(
        `${API_BASE_URL}/CourseType/GetList?PageIndex=0&PageSize=15`
      );
      return response.data.items;
    } catch (error) {
      throw error;
    }
  },

  getCourses: async () => {
    try {
      const response = await axios.get(
        `${API_BASE_URL}/Courses/getList?PageIndex=0&PageSize=15`
      );
      return response.data.items;
    } catch (error) {
      throw error;
    }
  },

  getCategories: async () => {
    try {
      const response = await axios.get(
        `${API_BASE_URL}/Categories/getList?PageIndex=0&PageSize=15`
      );
      console.log("Categories Response:", response.data); // Response datayı consola yazdırma
      return response.data.items;
    } catch (error) {
      throw error;
    }
  },

  getModules: async () => {
    try {
      const response = await axios.get(
        `${API_BASE_URL}/CourseModules/getList?PageIndex=0&PageSize=15`
      );
      console.log("response:", response.data.items);
      return response.data.items;
    } catch (error) {
      throw error;
    }
  },

  addModule: async (courseId, moduleName) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/CourseModules/add`, {
        CourseId: courseId,
        Name: moduleName,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  addCourse: async (courseTypeId, courseName, categoryId) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/Courses/add`, {
        CourseTypeId: courseTypeId,
        Name: courseName,
        CategoryId: categoryId,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  getLessons: async () => {
    try {
      const response = await axios.get(
        `${API_BASE_URL}/AsyncLessons/getList?PageIndex=0&PageSize=15`
      );
      console.log("lessonresponse:", response);
      return response.data.items;
    } catch (error) {
      throw error;
    }
  },

  addLesson: async (moduleId, lessonName, instructorId) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/AsyncLessons/add`, {
        CourseModuleId: moduleId,
        Name: lessonName,
        InstructorId: instructorId, // Add the instructorId to the request payload
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default educationService;
