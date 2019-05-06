import {GET_TODOS, DELETE_TODOS, ADD_TODOS, SELECT_TODO, SORT_TODO, UPDATE_TODO} from '../actions/types.js';

const initialState = {
    todos: [],
    todo: {}
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_TODOS:
            return {
                ...state, // Include everything in the state
                todos: action.payload
            };
        case DELETE_TODOS:
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload)
            };
        case ADD_TODOS:
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        case SELECT_TODO:
            return {
                ...state,
                todo: action.payload
            }
        case SORT_TODO: 
            return {
                ...state,
                todos: action.payload
            }
        case UPDATE_TODO:
            return {
                ...state,
                todo: action.payload
            }
        default:
            return state;
    }
}