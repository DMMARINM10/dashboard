import { configureStore } from '@reduxjs/toolkit';
import { albumsSlice } from './slices/albums';
import { authSlice } from './slices/auth';
import { commentsSlice } from './slices/comments';
import { photosSlice } from './slices/photos';
import { postsSlice } from './slices/posts';
import { todosSlice } from './slices/todos';
import { usersSlice } from './slices/users';

export const store = configureStore({
    reducer: {
        posts: postsSlice.reducer,
        users: usersSlice.reducer,
        comments: commentsSlice.reducer,
        todos: todosSlice.reducer,
        albums: albumsSlice.reducer,
        photos: photosSlice.reducer,
        auth: authSlice.reducer,
    },
});
