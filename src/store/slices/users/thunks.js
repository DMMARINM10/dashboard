import { addPerPage, addUsers } from './';

export const addAllUsers = (payload) => {
    return async (dispatch) => {
        dispatch(addUsers(payload));
    };
};

export const addUserPage = (payload) => {
    return async (dispatch) => {
        dispatch(addPerPage(payload));
    };
};
