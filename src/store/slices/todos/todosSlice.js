import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

export const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, { payload }) => {
            const { page, data } = payload;
            state[page] = data;
        },
    },
});

export const { addTodo } = todosSlice.actions;
