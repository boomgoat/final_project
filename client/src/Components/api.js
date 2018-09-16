import axios from 'axios';


export default {
    loginUser: {
        login: credentials =>
            axios.post("/api/loginAuth", { credentials }).then(res => res.data.user),
        signup: user =>
            axios.post("api/users", { user }).then(res => res.data.user)
    }
}