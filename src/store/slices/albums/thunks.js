import { addAlbums } from './';

export const addAlbumPage = (payload) => {
    return async (dispatch) => {
        dispatch(addAlbums(payload));
    };
};
