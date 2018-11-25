import axios from 'axios';


export default {
    user: {
        login: credentials =>
            axios.post("/api/loginAuth", { credentials }).then(res => res.data.user),
        signup: data => axios.post('/api/users', { data }).then(res => res.data),
        update: (data) => {
            console.log(data)
            return axios.patch(`/api/users/${data.id}`, { data }).then(res => res.data)
        },
    },

    admin: {
        login: credentials =>
            axios.post("/api/admins/login", { credentials }).then(res => res.data.admin)
    },

    brand: {
        login: credentials =>
            axios.post("/api/brands/login", { credentials }).then(res => res.data.brand)
    },

    job: {
        getJobs : () => axios.get('/api/jobs').then(res => res.data.job)
    }
}