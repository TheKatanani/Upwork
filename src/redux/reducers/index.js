import { combineReducers } from 'redux';
import signupReducer from './signup';
import  authReducer  from './auth';
import  loginReducer  from './login';
import  portalReducer  from './portal';
import jobsReducer from './jobs';

const rootReducer = combineReducers({
  signup: signupReducer,
  auth: authReducer,
  login: loginReducer,
  portal: portalReducer ,
  jobs: jobsReducer ,
});

export default rootReducer;
