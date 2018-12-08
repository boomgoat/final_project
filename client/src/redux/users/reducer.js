import uuid from 'uuid';
import { GET_USERS, ADD_USER, DELETE_USER} from './types';

const initialState = {
    
}

const userReducer = function(state = initialState, action) {
    switch(action.type) {
        case GET_USERS:
            return {
                ...state, ...action.payload
            }
        case 'USER_LOGGED_IN':
            return {...state, user: action.payload}
        case 'USER_UPDATE_REQUEST':
            return {...state, ...action.payload}
        default:
            return state;
    }
}

export default userReducer;