//educationService1.js

import API_URL from "../../Services/config";
import axios from "axios";

const API_BASE_URL = API_URL;

export const fetchInstructors = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/Instructors/getList`, {
      params: { PageIndex: 0, PageSize: 100 },
    });

    console.log("instructors", response.data);
    return response.data.items || [];
  } catch (error) {
    console.error("Error fetching instructors:", error);
    throw error;
  }
};

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

  addLesson: async (moduleId, lessonName) => {
    try {
      const currentDatetime = new Date();
      const isoDatetimeString = currentDatetime.toISOString();

      // Fetch instructors
      const instructors = await fetchInstructors();

    
      const selectedInstructor =
        instructors.length > 0 ? instructors[0].id : null;

      const response = await axios.post(`${API_BASE_URL}/AsyncLessons/add`, {
        CourseModuleId: moduleId,
        Name: lessonName,
        InstructorId: selectedInstructor,
        Video: "string",
        durationTime: isoDatetimeString,
        timeSpent: isoDatetimeString,
      });

      console.log("response", response.data);
      return response.data;
    } catch (error) {
      if (error.response && error.response.data) {
        console.error("Error adding lesson:", error.response.data);
        throw error.response.data; // or handle the error in a way that makes sense for your application
      } else {
        console.error("Error adding lesson:", error.message);
        throw error;
      }
    }
  },
};

export default educationService;
