import { GET_JOB, ADD_JOB } from '../users/types';
import api from "../../Components/api";

export const getJobs = (jobs) => {
    return {
        type: 'GET_JOBS',
        payload: jobs
    };
};

const createFetchJobRequest = () => ({
  type: 'GET_JOB_REQUEST'
});

const createFetchJobSuccess = (job) => ({
  type: 'GET_JOB_SUCCESS',
  payload: job
});

const createFetchJobFailed = (error) => ({
  type: 'GET_JOB_FAILED'
});

export const fetchJob = (id) => dispatch => {
  dispatch(createFetchJobRequest());
  return api.job.getOne(id)
    .then(job => {
      return dispatch(createFetchJobSuccess(job));
    })
    .catch(error => {
      return dispatch(createFetchJobFailed(error))
    })
};

export const fetchJobs = () => dispatch =>
    api.job.getJobs().then(jobs => {
        console.log(jobs)
        dispatch(getJobs(jobs));
    });

export const createJobRequest = (data) => ({
        type: 'ADD_JOB',
        payload: data
    });


export const createJob = (data) => dispatch => {
        return api.job.createJob(data).then(data => {
            dispatch(createJobRequest(data));
        });
    }


