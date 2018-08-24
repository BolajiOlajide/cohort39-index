import {
    GET_TODOS,
    ADD_TODO
} from '../utils/types';
import initialState from './initialState';


const todoReducer = (state = initialState.todos, action) => {
    switch(action.type) {
        case GET_TODOS:
            return action.payload;

        case ADD_TODO:
            return [
                action.payload,
                ...state
            ];

        default:
            return state;
    }
}

export default todoReducer;