import { combineReducers } from 'redux';
import userReducer from './userReducer';
import loginReducer from './loginReducer';
import jobReducer from './jobReducer';

export default combineReducers({
    user: userReducer,
    loginUser: loginReducer,
    job: jobReducer
});