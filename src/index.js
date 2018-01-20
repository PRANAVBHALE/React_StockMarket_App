import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import reducers from './reducers'
import { createStore } from 'redux';
import './index.css';
import App from './containers/app';

ReactDOM.render(
    <Provider store={ createStore(reducers) }>
        <App />
    </Provider>,
    document.getElementById('root')
);
