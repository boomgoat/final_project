import uuid from 'uuid';

const initialState = [
  
];

const jobsReducer = function(state = initialState, action) {
    switch(action.type) {
        case 'GET_JOBS':
            return {
                ...state
            }
        default:
            return state;
    }
}

export default jobsReducer;