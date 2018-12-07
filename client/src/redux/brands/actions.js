import { GET_BRAND, BRAND_LOGGED_IN, BRAND_LOGGED_OUT } from './types';
import api from "../../Components/api";

export const getBrand = () => {
    return {
        type: GET_BRAND
        
    };
};

export const brandLoggedIn = (brand) => ({
    type: 'BRAND_LOGGED_IN',
    payload: brand
});

export const brandLoggedOut = () => ({
    type: BRAND_LOGGED_OUT
});

export const login = credentials => dispatch =>
    api.brand.login(credentials).then(brand => {
        localStorage.FavorBankBRAND = brand.token;
        dispatch(brandLoggedIn(brand));
    });

export const logout = () => dispatch => {
    localStorage.removeItem('FavorBankBRAND');
    dispatch(brandLoggedOut());
};
