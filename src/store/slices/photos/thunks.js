import { addPhotos } from './';

export const addPhotoPage = (payload) => {
    return async (dispatch) => {
        dispatch(addPhotos(payload));
    };
};
