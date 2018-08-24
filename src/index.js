import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './store';

// components
import Home from './components/Home.component.jsx';


const store = configureStore();

const Main = () => (
    <Provider store={store}>
        <Home />
    </Provider>
)


render(<Main />, document.getElementById("root"));
