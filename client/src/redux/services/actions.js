import { GET_JOB, ADD_JOB } from '../users/types';
import api from "../../Components/api";

// Services

export const getServices = (services) => {
    return {
        type: 'GET_SERVICES',
        payload: services
    };
};

export const fetchServices = () => dispatch =>
    api.service.getService().then(services => {
        console.log(services)
        dispatch(getServices(services));
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

