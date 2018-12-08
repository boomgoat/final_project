import {GET_USERS, ADD_USER, DELETE_USER, USER_LOGGED_OUT, USER_LOGGED_IN} from './types';
import api from "../../Components/api";

export const getUsers = (users) => {
  return {
    type: 'GET_USERS',
    payload: users
  };
};

export const fetchUsers = () => dispatch =>
  api.user.getUsers().then(users => {
    dispatch(getUsers(users));
  });

export const userLoggedIn = (user) => ({
  type: USER_LOGGED_IN,
  payload: user
});

export const userLoggedOut = () => ({
  type: USER_LOGGED_OUT
});

export const userUpdateRequest = (data) => ({
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

export const updateUser = (data) => dispatch => {
  return api.user.update(data).then(data => {
    localStorage.FavorBankJWT = data.user.token;
    dispatch(userUpdateRequest(data));
  });
};

const getUserSuccess = user => ({
  type: 'GET_USER_SUCCESS',
  payload: user
});

const getUserFailed = error => ({
  type: 'GET_USER_FAILED',
  payload: error
});

export const getUser = id => dispatch => {
  return api.user.getUser(id)
    .then(user => {
      return dispatch(getUserSuccess(user));
    })
    .catch(err => {
      return dispatch(getUserFailed(err));
    })
};