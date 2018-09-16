import userReducer from './users/reducer';
import {combineReducers} from 'redux';

export default combineReducers({
  user: userReducer,
});