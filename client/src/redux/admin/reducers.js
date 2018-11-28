import { GET_ADMIN } from './types';

const initialState = {
    
}

const adminReducer = function(state = initialState, action) {
    switch(action.type) {
        case GET_ADMIN:
            return {
                ...state
            }
        case 'ADMIN_LOGGED_IN':
            return {...state, admin: action.payload}
        case 'ADMIN_LOGGED_OUT':
            return { }
        default:
            return state;
    }
}

export default adminReducer;