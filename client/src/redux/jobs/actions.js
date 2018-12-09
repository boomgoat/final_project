import {GET_JOB, ADD_JOB} from '../users/types';
import api from "../../Components/api";

export const getJobsDone = (jobs) => {
  return {
    type: 'GET_JOBS_SUCCESS',
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

const createDeleteJobRequest = () => ({
  type: 'DELETE_JOB_REQUEST'
});

const createDeleteJobSuccess = () => ({
  type: 'DELETE_JOB_SUCCESS'
});

const createDeleteJobFailed = () => ({
  type: 'DELETE_JOB_FAILED'
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

export const fetchJobs = () => dispatch => api.job.getJobs().then(jobs => {
  dispatch(getJobsDone(jobs));
  return jobs;
});
export const deleteJob = (id) => dispatch => {
  dispatch(createDeleteJobRequest());
  return api.job.deleteJob(id)
  .then(job => {
    return dispatch(createDeleteJobSuccess());
  })
  .catch(error => {
    return dispatch(createDeleteJobFailed(error));
  })
}

export const fetchJobs = () => dispatch => api.job.getJobs().then(jobs => dispatch(getJobs(jobs)));

export const createJobRequest = (data) => ({
  type: 'ADD_JOB',
  payload: data
});


export const createJob = (data) => dispatch => {
  return api.job.createJob(data).then(data => {
    dispatch(createJobRequest(data));
  });
}

export const submitBid = data => dispatch => {
  return api.bid.saveBid(data).then(data=> {
    console.log(data);
  })
}
