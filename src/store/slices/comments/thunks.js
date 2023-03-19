import { addComments } from '.';

export const addCommentPage = (payload) => {
    return async (dispatch) => {
        dispatch(addComments(payload));
    };
};
