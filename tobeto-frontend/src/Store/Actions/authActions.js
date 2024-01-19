
export const loginRequest = () => {
    return {
      type: 'LOGIN_REQUEST',
    };
};

export const loginSuccess = (token, userDetails) => {
  return {
      type: 'LOGIN_SUCCESS',
      payload: { token, userDetails },
  };
};

export const loginFailure = (error) => {
    return {
      type: 'LOGIN_FAILURE',
      payload: error,
    };
};

export const logout = () => {
    return {
      type: 'LOGOUT',
    };
};


