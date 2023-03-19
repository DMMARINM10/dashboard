import { addTodo } from './';

export const addTodoPage = (payload) => {
    return async (dispatch) => {
        dispatch(addTodo(payload));
    };
};
