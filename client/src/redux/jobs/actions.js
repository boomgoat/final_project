import { GET_JOB, ADD_JOB } from '../users/types';
import api from "../../Components/api";

export const getJobs = (jobs) => {
    return {
        type: 'GET_JOBS',
        payload: jobs
    };
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

// Services

export const getServices = (service) => {
    return {
        type: 'GET_SERVICE',
        payload: service
    };
};

export const getService = () => dispatch =>
    api.service.getService().then(service => {
        dispatch(getServices(service));
    });

export const createServiceRequest = (data) => ({
        type: 'ADD_SERVICE',
        payload: data
    });


export const createService = (data) => dispatch => {
        return api.service.createService(data).then(data => {
            dispatch(createServiceRequest(data));
        });
    }