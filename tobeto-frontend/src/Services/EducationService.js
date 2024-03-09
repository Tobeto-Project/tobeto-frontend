  // EducationService.js

  import educationService from "../AdminPanel/services/educationService";

  export const mapCourseToEducationData = async () => {
    try {
  
      const courses = await educationService.getCourses();

  
      console.log("Fetched Courses:", courses);

    
      const educationDataMapped = courses.map((course) => {
        return {
          id: course.id.toString(), 
          EducationImage: course.courseTypeId, 
          EducationTitle: course.name, 
      
        };
      });

    
      console.log("Mapped Education Data:", educationDataMapped);

      return educationDataMapped;
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
