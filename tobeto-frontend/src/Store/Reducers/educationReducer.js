
const educationReducer = (state = { educationTitle: "" }, action) => {
  switch (action.type) {
    case "SET_EDUCATION_TITLE":
      return { ...state, educationTitle: action.payload };
    default:
      return state;
  }
};

export default educationReducer;
