import { GET_JOB } from '../users/types';
import api from "../../Components/api";

export const getJobs = (jobs) => {
    return {
        type: GET_JOB,
        payload: jobs
    };
};

export const getJob = () => dispatch =>
    api.jobs.getJob().then(jobs => {
        dispatch(getJobs(jobs));
    });

