import userReducer from './users/reducer';
import jobsReducer from './jobs/reducer';
import {combineReducers} from 'redux';
import adminReducer from './admin/reducers';
import serviceReducer from './services/reducer';

export default combineReducers({
  user: userReducer,
  jobs: jobsReducer,
  admin: adminReducer,
  services: serviceReducer
});