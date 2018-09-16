import userReducer from './users/reducer';
import jobsReducer from './jobs/reducer';
import {combineReducers} from 'redux';

export default combineReducers({
  user: userReducer,
  jobs: jobsReducer
});