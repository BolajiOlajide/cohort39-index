import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

// reducer
import rootReducer from '../reducers';

import initialState from '../reducers/initialState';


const configureStore = () => {
    return createStore(
        rootReducer,
        initialState,
        compose(
            applyMiddleware(thunk),
            window.devToolsExtension? window.devToolsExtension() : (empty) => empty
        )
    );
}

export default configureStore;
