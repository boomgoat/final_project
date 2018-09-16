import uuid from 'uuid';
import { GET_USERS, ADD_USER, DELETE_USER} from './types';

const initialState = {
    users: [
        { 
            id: uuid(),
            name: 'John', 
            picURL: '../Components/Resources/Images/dingus.jpg', 
            about: 'Lorem ipsum dolor sit amet, nec sanctus debitis omittam id, vix soleat tibique id. Consetetur conclusionemque vel no, dicant nullam eam ei. Pri possim audiam inimicus id, ne veniam dicunt singulis per.'
        }
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