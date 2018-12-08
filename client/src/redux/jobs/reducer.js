import {ADD_JOB} from '../users/types'

const initialState = {
  fetching: false,
  error: false,
  data: []
};

const jobsReducer = function (state = initialState, {type, payload}) {
  switch (type) {
    case 'GET_JOBS':
      return {...state, data: payload};
    case 'GET_JOB':
      return state;
    case 'ADD_JOB':
      return {
        ...state, data: state.data.concat(payload)
      };
    default:
      return state;
  }
}

export default jobsReducer;