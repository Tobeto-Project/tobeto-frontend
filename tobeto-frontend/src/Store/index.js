import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import {thunk} from "redux-thunk"; 
import authReducer from "./Reducers/authReducer";
import educationReducer from "./Reducers/educationReducer";
import authReducerAdmin from "../AdminPanel/Store/reducers/authreducer";

const rootReducer = combineReducers({
  auth: authReducer,
  education: educationReducer,
  admin: authReducerAdmin,
});

// Redux DevTools'u yalnızca geliştirme ortamında etkinleştirme kontrolü!!!
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
