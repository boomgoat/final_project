import axios from 'axios';


export default {
    user: {
        login: credentials =>
            axios.post("/api/loginAuth", { credentials }).then(res => res.data.user),
        signup: data => axios.post('/api/users', { data }).then(res => res.data),
        update: data => axios.patch('/api/users', { data }).then(res => res.data),
    }
}