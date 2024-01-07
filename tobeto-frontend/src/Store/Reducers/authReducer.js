const initialState = {
    isLoggedIn: false,
    user: null,
    error: null,
    isLoading: false,
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN_REQUEST':
        return { ...state, isLoading: true, error: null };
      case 'LOGIN_SUCCESS':
        return { ...state, isLoading: false, isLoggedIn: true, user: action.payload };
      case 'LOGIN_FAILURE':
        return { ...state, isLoading: false, error: action.payload };
      case 'LOGOUT':
        return { ...state, isLoggedIn: false, user: null };
      default:
        return state;
    }
  };
  
  export default authReducer;