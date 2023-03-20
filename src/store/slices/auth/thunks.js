import { login, logout } from './';

export const loginUser = (payload) => {
    return async (dispatch) => {
        dispatch(login(payload));
    };
};

export const logoutUser = () => {
    return async (dispatch) => {
        dispatch(logout());
    };
};
