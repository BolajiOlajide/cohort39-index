import { combineReducers } from 'redux';

import todos from './todo.reducer';

const rootReducer = combineReducers({
    todos
});

export default rootReducer;
