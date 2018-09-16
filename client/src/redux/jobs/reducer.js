import uuid from 'uuid';

const initialState = [
  { 
      id: uuid(), 
      title: 'Content Writing',
      budget: "200 favor points",
      desc: "Info about cw."
  },
  { 
      id: uuid(), 
      title: 'Content Posting',
      budget: "50 favor points",
      desc: "Info about cp."
  },
  { 
      id: uuid(), 
      title: 'Content Posting',
      budget: "50 favor points",
      desc: "Info about cp."
  },
  { 
      id: uuid(), 
      title: 'Content Posting',
      budget: "50 favor points",
      desc: "Info about cp."
  },
  { 
      id: uuid(), 
      title: 'Content Posting',
      budget: "50 favor points",
      desc: "Info about cp."
  }
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