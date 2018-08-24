import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// reducer
import rootReducer from '../reducers';

import initialState from '../reducers/initialState';


const configureStore = () => {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk)
    );
}

export default configureStore;
