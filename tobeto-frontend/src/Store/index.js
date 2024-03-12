import { createStore, applyMiddleware, combineReducers } from 'redux';
import authReducer from './Reducers/authReducer';
import { thunk } from 'redux-thunk';
import educationReducer from './Reducers/educationReducer';


const rootReducer = combineReducers({
  auth: authReducer,
  education: educationReducer,
  
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;