import axios from 'axios'
import {GET_TODOS, DELETE_TODOS, ADD_TODOS, SELECT_TODO} from './types'

// Get todos
export const getTodos = () => dispatch => {
    axios
        .get('/api/todos/')
        .then(res => {
            dispatch({
                type: GET_TODOS,
                payload: res.data
            });
        })
        .catch(err => console.log(err));
};

// Delete todo
export const deleteTodos = (id) => dispatch => {
    axios
        .delete(`/api/todos/${id}/`)
        .then(res => {
            dispatch({
                type: DELETE_TODOS,
                payload: id
            });
        })
        .catch(err => console.log(err));
};

// Add todo
export const addTodos = (todo) => dispatch => {
    axios
        .post('/api/todos/', todo)
        .then(res => {
            dispatch({
                type: ADD_TODOS,
                payload: res.data
            });
        })
        .catch(err => console.log(err));
};

// Selete todo
export const selectTodo = (id) => dispatch => {
    axios
        .get(`/api/todos/${id}`)
        .then(res => {
            dispatch({
                type: SELECT_TODO,
                payload: res.data 
            });
        })
        .catch(err => console.log(err));
};