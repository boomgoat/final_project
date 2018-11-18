import userReducer from './users/reducer';
import jobsReducer from './jobs/reducer';
import {combineReducers} from 'redux';
import adminReducer from './admin/reducers';

export default combineReducers({
  user: userReducer,
  jobs: jobsReducer,
  admin: adminReducer
});