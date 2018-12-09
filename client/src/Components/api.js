import axios from 'axios';


export default {
    user: {
        getUsers : () => axios.get('/api/users').then(res =>  {
            return res.data}),
        getUser : (id) => axios.get(`/api/users/${id}`).then(res =>  {
            return res.data}),
        login: credentials =>
            axios.post("/api/loginAuth", { credentials }).then(res => res.data.user),
        signup: data => axios.post('/api/users', { data }).then(res => res.data),
        update: (data) => {
            return axios.patch(`/api/users/${data.id}`, { data }).then(res => res.data)
        },
    },

    admin: {
        login: credentials =>
            axios.post("/api/admins/login", { credentials }).then(res => res.data.admin)
    },

    brand: {
        login: credentials =>
            axios.post("/api/brands/login", { credentials }).then(res =>  {
                return res.data.brand})
    },

    job: {
        getOne : (id) => axios.get(`/api/jobs/${id}`).then(res =>  {
            return res.data}),
        getJobs : () => axios.get('/api/jobs').then(res =>  {
            return res.data}),
        createJob: data => axios.post('/api/jobs', { data }).then(res => res.data),
        deleteJob : (id) => axios.delete(`/api/jobs/${id}`).then(res => res.data)
    },
    service: {
        getService : () => axios.get('/api/services').then(res =>  {
            return res.data}),
        createService: data => axios.post('/api/services', { data }).then(res => res.data)
    },
    bid : {
        saveBid: (data, meta) => axios.post('/api/bids', {data, meta}).then(res => res.data)
    }
}
