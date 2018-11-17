import uuid from 'uuid';
import { GET_USERS, ADD_USER, DELETE_USER} from './types';

const initialState = {
    users: [
        
    ]
}

const userReducer = function(state = initialState, action) {
    switch(action.type) {
        case GET_USERS:
            return {
                ...state
            }
        case 'USER_LOGGED_IN':
            return {...state, user: action.payload}
        default:
            return state;
    }
}

export default userReducer;