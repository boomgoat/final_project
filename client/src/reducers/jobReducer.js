import uuid from 'uuid';
import { GET_JOB } from '../actions/types';

const initialState = {
    job: [
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
    ]
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_JOB:
            return {
                ...state
            }
        default:
            return state;
    }
}