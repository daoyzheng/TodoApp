import axios from 'axios'
import {GET_TODOS, DELETE_TODOS} from './types'

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

// Delete todos
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