import uuid from 'uuid';
import { GET_USERS, ADD_USER, DELETE_USER} from '../actions/types';

const initialState = {
    users: [
        { id: uuid(), name: 'Jhoomlaal'}
    ]
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_USERS:
            return {
                ...state
            }
        default:
            return state;
    }
}