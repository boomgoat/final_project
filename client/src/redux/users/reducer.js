import {GET_USERS} from './types';

const initialState = {};

const userReducer = function (state = initialState, action) {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state, ...action.payload
      };
    case 'GET_USER_REQUEST': // does nothing
      return state;
    case 'GET_USER_SUCCESS':
      // fix this
      return state;
    case 'GET_USER_FAILED': // does nothing
      return state;
    case 'USER_LOGGED_IN':
      return {...state, user: action.payload};
    case 'USER_UPDATE_REQUEST':
      return {...state, ...action.payload};
    default:
      return state;
  }
};

export default userReducer;