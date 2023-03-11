import { combineReducers } from 'redux';
import signupReducer from './signup';
import  authSlice  from './auth';
import  loginSlice  from './login';

const rootReducer = combineReducers({
  signup: signupReducer,
  auth: authSlice,
  login: loginSlice,
});

export default rootReducer;
