import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    logged: false,
    user: null,
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, { payload }) => {
            state.logged = true;
            state.user = payload;
        },
        logout: (state) => {
            state.logged = false;
            state.user = null;
        },
    },
});

export const { login, logout } = authSlice.actions;
