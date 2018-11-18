import { GET_ADMIN, ADMIN_LOGGED_OUT, ADMIN_LOGGED_IN } from './types';
import api from "../../Components/api";

export const getAdmin = () => {
    return {
        type: GET_ADMIN
        
    };
};

export const adminLoggedIn = (admin) => ({
    type: ADMIN_LOGGED_IN,
    payload: admin
});

export const adminLoggedOut = () => ({
    type: ADMIN_LOGGED_OUT
});

export const login = credentials => dispatch =>
    api.admin.login(credentials).then(admin => {
        localStorage.FavorBankADMIN = admin.token;
        dispatch(adminLoggedIn(admin));
    });

export const logout = () => dispatch => {
    localStorage.removeItem('FavorBankADMIN');
    dispatch(adminLoggedOut());
};
