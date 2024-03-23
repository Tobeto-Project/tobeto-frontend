//combinereducer.js
import { createStore, combineReducers } from "redux";


import authReducerAdmin from "./reducers/authreducer";




const rootReducer = combineReducers({
  auth: authReducerAdmin,
 
});

const Adminstore = createStore(rootReducer);

export default Adminstore;
