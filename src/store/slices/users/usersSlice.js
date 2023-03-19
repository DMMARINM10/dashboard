import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    users: [],
};

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addUsers: (state, { payload }) => {
            state.users = payload;
        },
        addPerPage: (state, { payload }) => {
            const { page, data } = payload;
            state[page] = data;
        },
    },
});

export const { addUsers, addPerPage } = usersSlice.actions;
