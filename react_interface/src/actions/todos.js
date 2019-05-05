import axios from 'axios'
import {GET_TODOS} from './types'

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