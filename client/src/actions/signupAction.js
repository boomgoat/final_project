import { ADD_USER } from './types';
import api from '../Components/api';
import { userLoggedIn } from './auth';

export const signup = (data) => (dispatch) => 
    api.loginUser.signup(data).then(user => dispatch(userLoggedIn(user)));