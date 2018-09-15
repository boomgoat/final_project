import axios from 'axios';


export default {
    user: {
        login: credentials =>
            axios.post("/api/loginAuth", { credentials }).then(res => res.data.user)
    }
}