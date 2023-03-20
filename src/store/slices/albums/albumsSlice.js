import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

export const albumsSlice = createSlice({
    name: 'albums',
    initialState,
    reducers: {
        addAlbums: (state, { payload }) => {
            const { page, data } = payload;
            state[page] = data;
        },
    },
});

export const { addAlbums } = albumsSlice.actions;
