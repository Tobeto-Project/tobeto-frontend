import { createStore, applyMiddleware, combineReducers } from 'redux';
import authReducer from './Reducers/authReducer';
import { thunk } from 'redux-thunk';


const rootReducer = combineReducers({
  auth: authReducer,
  // buraya diğer reducer'larınızı ekleyebilirsiniz
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;