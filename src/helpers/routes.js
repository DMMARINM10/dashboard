import {
    getAlbums,
    getComments,
    getPhotos,
    getPosts,
    getTodos,
    getUsers,
} from '../services/requests';
import { addAlbumPage } from '../store/slices/albums';
import { addCommentPage } from '../store/slices/comments';
import { addPhotoPage } from '../store/slices/photos';
import { addPostPage } from '../store/slices/posts';
import { addTodoPage } from '../store/slices/todos';
import { addUserPage } from '../store/slices/users';

export const dataHandling = (route, users, data) => {
    if (route === 'posts') {
        const { userId, title, body } = data;
        const user = users.find((u) => u.id === userId)?.username;
        return {
            user,
            title,
            body,
        };
    } else if (route === 'comments') {
        const { name: title, body, email: footer } = data;
        return {
            title,
            body,
            footer,
        };
    } else if (route === 'users') {
        const {
            username: user,
            name,
            email,
            address,
            phone,
            website,
            company,
        } = data;
        const userInfo = {
            name,
            email,
            address,
            phone,
            website,
            company,
        };
        return {
            user,
            userInfo,
        };
    } else if (route === 'todos') {
        const { title, completed, userId } = data;
        const user = users.find((u) => u.id === userId)?.username;
        return {
            user,
            title,
            completed,
        };
    } else if (route === 'albums') {
        const { userId, title } = data;
        const user = users.find((u) => u.id === userId)?.username;
        return {
            user,
            title,
        };
    } else if (route === 'photos') {
        const { thumbnailUrl: url, title } = data;
        return {
            url,
            title,
        };
    }
};

export const extraValues = (
    data,
    perPage,
    setEmptyRows,
    emptyRows,
    element
) => {
    if (data.length < perPage) {
        let count = perPage - data.length;
        const extra = [];
        while (count !== 0) {
            extra.push(element);
            count = count - 1;
        }
        setEmptyRows(extra);
    } else {
        if (emptyRows.length > 0) setEmptyRows([]);
    }
};

export const request = {
    posts: {
        perPage: 6,
        func: getPosts,
        users: true,
        dispatchFunc: addPostPage,
    },
    comments: {
        perPage: 6,
        func: getComments,
        users: false,
        dispatchFunc: addCommentPage,
    },
    users: {
        perPage: 6,
        func: getUsers,
        users: false,
        dispatchFunc: addUserPage,
    },
    todos: {
        perPage: 6,
        func: getTodos,
        users: true,
        dispatchFunc: addTodoPage,
    },
    albums: {
        perPage: 12,
        func: getAlbums,
        users: true,
        dispatchFunc: addAlbumPage,
    },
    photos: {
        perPage: 12,
        func: getPhotos,
        users: false,
        dispatchFunc: addPhotoPage,
    },
};
