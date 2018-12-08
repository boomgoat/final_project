import uuid from 'uuid';
import { ADD_JOB } from '../users/types'

const initialState = [
  
];

const serviceReducer = function(state = initialState, action) {
    switch(action.type) {
        case 'GET_SERVICES':
            // return {
                
            //     ...state, jobs: action.payload
            // }
            return state = action.payload
        case 'ADD_SERVICE':
            return {
                ...state, services: action.payload
            }
        default:
            return state;
    }
}

export default serviceReducer;