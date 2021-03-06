import axios from 'axios';

import {
    GET_TODOS,
    ADD_TODO
} from '../utils/types';


const BASE_URL = 'http://localhost:4500';

const getTodosAction = (payload) => ({
    type: GET_TODOS,
    payload
});

const addTodoAction = (payload) => ({
    type: ADD_TODO,
    payload
});

export const getAllTodos = () => (dispatch) => axios
    .get(`${BASE_URL}/todos`)
    .then(res => {
        return dispatch(getTodosAction(res.data));
    });


export const addTodo = todo => (dispatch) => axios
    .post(`${BASE_URL}/todos`, { todo })
    .then(res => {
        return dispatch(addTodoAction(res.data));
    });
