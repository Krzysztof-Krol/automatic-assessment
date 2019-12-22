import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Redux data
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import allReducers from './reducers/allReducers';
const store = createStore(allReducers);

// End of redux data 

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);
serviceWorker.unregister();
