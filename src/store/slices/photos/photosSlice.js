import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

export const photosSlice = createSlice({
    name: 'photos',
    initialState,
    reducers: {
        addPhotos: (state, { payload }) => {
            const { page, data } = payload;
            state[page] = data;
        },
    },
});

export const { addPhotos } = photosSlice.actions;
