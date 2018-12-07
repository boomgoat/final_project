import uuid from 'uuid';
import { ADD_JOB } from '../users/types'

const initialState = [
  
];

const jobsReducer = function(state = initialState, action) {
    switch(action.type) {
        case 'GET_JOBS':
            console.log(action)
            // return {
                
            //     ...state, jobs: action.payload
            // }
            return state = action.payload
        case 'ADD_JOB':
            return {
                ...state, jobs: action.payload
            }
         default:
            return state;
    }
}

export default jobsReducer;