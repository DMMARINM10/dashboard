import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

export const commentsSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {
        addComments: (state, { payload }) => {
            const { page, data } = payload;
            state[page] = data;
        },
    },
});

export const { addComments } = commentsSlice.actions;
