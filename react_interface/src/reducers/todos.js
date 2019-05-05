import {GET_TODOS} from '../actions/types.js';

const initialState = {
    todos: []
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_TODOS:
            return {
                ...state, // Include everything in the state
                todos: action.payload
            };
        default:
            return state;
    }

}