import uuid from 'uuid';
import { GET_USERS, ADD_USER, DELETE_USER} from '../actions/types';

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