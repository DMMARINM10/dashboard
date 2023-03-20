import axios from 'axios';

const baseUrl = import.meta.env.VITE_URL;

const httpRequest = async (request = 'posts', start = 0, limit = 6) => {
    const config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `${baseUrl}/${request}?_start=${start}&_limit=${limit}`,
    };
    try {
        const response = await axios(config);
        const resp = response.data;
        return resp;
    } catch (e) {
        const errorMsg = JSON.stringify(e?.response?.data?.message);
        throw new Error(errorMsg);
    }
};

export const getPosts = (start, limit) => {
    return httpRequest('posts', start, limit);
};

export const getUsers = (start, limit) => {
    return httpRequest('users', start, limit);
};

export const getComments = (start, limit) => {
    return httpRequest('comments', start, limit);
};

export const getTodos = (start, limit) => {
    return httpRequest('todos', start, limit);
};

export const getAlbums = (start, limit) => {
    return httpRequest('albums', start, limit);
};

export const getPhotos = (start, limit) => {
    return httpRequest('photos', start, limit);
};
