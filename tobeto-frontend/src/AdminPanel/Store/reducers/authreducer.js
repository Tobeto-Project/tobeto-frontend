// authReducerAdmin.js

import { LOGIN_SUCCESS, LOGIN_FAILURE } from "../actions/type";

const initialState = {
  isAuthenticated: false,
  user: null,
  error: null,
};

const authReducerAdmin = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user, // Kullanıcı bilgilerini güncelleyin
        error: null,
      };
    case LOGIN_FAILURE:
     
      return {
        ...state,
        isAuthenticated: false,
        user: null, // Hata durumunda kullanıcı bilgilerini sıfırlayın
        error: action.payload,
      };

    case "LOGOUT":
      return {
        ...state,
        isAuthenticated: false,
        user: null, // Çıkış yapıldığında kullanıcı bilgilerini sıfırlayın
      };
    default:
      return state;
  }
};

export default authReducerAdmin;
