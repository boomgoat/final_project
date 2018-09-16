import { GET_USERS, ADD_USER, DELETE_USER, USER_LOGGED_OUT, USER_LOGGED_IN } from './types';
import api from "../../Components/api";

export const getUsers = () => {
    return {
        type: GET_USERS
    };
};

export const userLoggedIn = (user) => ({
    type: USER_LOGGED_IN,
    user
});

export const userLoggedOut = () => ({
    type: USER_LOGGED_OUT
});

export const userUpdateRequest = data => ({
    type: 'USER_UPDATE_REQUEST',
    payload: data
});

export const login = credentials => dispatch =>
    api.user.login(credentials).then(user => {
        localStorage.FavorBankJWT = user.token;
        dispatch(userLoggedIn(user));
    });

export const signup = data => dispatch =>
    api.user.signup(data).then(data => {
        dispatch(userLoggedIn(data));
    });

export const logout = () => dispatch => {
    localStorage.removeItem('FavorBankJWT');
    dispatch(userLoggedOut());
};

export const updateUser = data => dispatch => {
    return api.user.update(data).then(data => {
        dispatch(updateUser(data));
    });
}
