import { addUsers } from './';

export const addAllUsers = (payload) => {
    return async (dispatch) => {
        dispatch(addUsers(payload));
    };
};
