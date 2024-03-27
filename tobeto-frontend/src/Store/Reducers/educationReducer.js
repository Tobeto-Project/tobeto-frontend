//EducationReducer.js

const educationReducer = (
  state = { educationTitle: "", courseModules: [] },
  action
) => {
  switch (action.type) {
    case "SET_EDUCATION_TITLE":
      return { ...state, educationTitle: action.payload };
    case "SET_COURSE_MODULES":
      return { ...state, courseModules: action.payload };
    default:
      return state;
  }
};

export default educationReducer;
