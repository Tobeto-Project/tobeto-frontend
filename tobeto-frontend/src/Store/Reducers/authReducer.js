const initialState = {
  isLoggedIn: false,
  user: null,
  error: null,
  isLoading: false,
  userDetails: null,
};

const authReducer = (state = initialState, action) => {
  console.log("Reducer action:", action);

  switch (action.type) {
    case "LOGIN_REQUEST":
      return { ...state, isLoading: true, error: null };
      case "LOGIN_SUCCESS":
        console.log("action.payload.userDetails:", action.payload.userDetails); // userDetails'ı console'a yazdırın
        return {
            ...state,
            isLoggedIn: true,
            userDetails: action.payload.userDetails,
            isLoading: false,
        };
    case "LOGIN_FAILURE":
      return { ...state, isLoading: false, error: action.payload };
    case "LOGOUT":
      return { ...state, isLoggedIn: false, user: null, userDetails: null };
    case "SET_USER_DETAILS":
      return { ...state, userDetails: action.payload };
    default:
      return state;
  }
};

export default authReducer;
