import { USER_LOGGED_IN, USER_LOGGED_OUT } from "./types";
import api from "../Components/api";

export const userLoggedIn = (loginUser) => ({
    type: USER_LOGGED_IN,
    loginUser
});

export const login = credentials => dispatch => 
    api.loginUser.login(credentials).then( loginUser => 
        {
            localStorage.FavorBankJWT = loginUser.token;
        
            dispatch(userLoggedIn(loginUser));
        });

export const userLoggedOut = () => ({
    type: USER_LOGGED_OUT
});

export const logout = () => dispatch => 
        {
            localStorage.removeItem('FavorBankJWT');
            dispatch(userLoggedOut());
        };

