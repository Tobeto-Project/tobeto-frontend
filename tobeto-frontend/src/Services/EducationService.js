// EducationService.js
import axios from "axios";
import educationService from "../AdminPanel/services/educationService";
import API_URL from "./config";

const API_BASE_URL = API_URL;

export const mapCourseToEducationData = async () => {
  try {
    const courses = await educationService.getCourses();
    const mappedCourses = [];

    for (const course of courses) {
      const courseModules = await educationService.getListModulesByCourse(
        course.id
      ); // courseId'yi geçiyoruz

      const educationData = {
        id: course.id.toString(),
        EducationImage: course.courseTypeId,
        EducationTitle: course.name,
        courseModules: courseModules, // courseModules'i ekledik
      };

      mappedCourses.push(educationData);
    }

    console.log("Mapped Education Data:", mappedCourses);

    return mappedCourses;
  } catch (error) {
    console.error("Error mapping course data:", error);
    throw error;
  }
};

export const getEducationData = async () => {
  try {
    const educationDataMapped = await mapCourseToEducationData();
    return Promise.resolve(educationDataMapped);
  } catch (error) {
    return Promise.reject(error);
  }
};


export const getCourseModules = async (courseId) => {
  try {
    const courseModules = await educationService.getListModulesByCourse(
      courseId
    );
    console.log("Course Modules:", courseModules); // Kurs modüllerini konsola yazdır
    return courseModules;
  } catch (error) {
    console.error("Error fetching course modules:", error);
    throw error;
  }
};

export const getAsyncLessonsByCourseModule = async (courseModuleId) => {
  try {
 
    const response = await axios.get(
      `${API_BASE_URL}/AsyncLessons/getListByCourseModule?id=${courseModuleId}`
    );
    console.log("Async lessons:", response.data.items);
    return response.data.items;
  } catch (error) {
    console.error("Error fetching async lessons by course module:", error);
    throw error;
  }
};


