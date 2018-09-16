import { GET_USERS, ADD_USER, DELETE_USER, USER_LOGGED_IN, USER_LOGGED_OUT} from '../actions/types';

const defaultState = {
    loginUser:[]
};

export default function loginUser(state = {defaultState}, action = {}) {
    switch(action.type) {
        case USER_LOGGED_IN:
            return action.loginUser;
        case USER_LOGGED_OUT:
            return {}
        default:
            return state;
    }
}