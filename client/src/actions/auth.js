import { USER_LOGGED_IN } from "./types";
import api from "../Components/api";

export const userLoggedIn = (user) => ({
    type: USER_LOGGED_IN,
    user
});

export const login = credentials => dispatch => 
    api.user.login(credentials).then( user => dispatchEvent(userLoggedIn(user)));