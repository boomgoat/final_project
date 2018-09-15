import { GET_USERS, ADD_USER, DELETE_USER, USER_LOGGED_IN} from '../actions/types';

export default function(state = {}, action = {}) {
    switch(action.type) {
        case USER_LOGGED_IN:
            return action.user;
        default:
            return state;
    }
}