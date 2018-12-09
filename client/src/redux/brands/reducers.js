import { GET_BRAND } from './types';

const initialState = {
    
}

const brandReducer = function(state = initialState, action) {
    switch(action.type) {
        case GET_BRAND:
            return {
                ...state
            }
        case 'BRAND_LOGGED_IN':
            return {...state, brand: action.payload}
        case 'BRAND_LOGGED_OUT':
            return { }
        default:
            return state;
    }
}

export default brandReducer;