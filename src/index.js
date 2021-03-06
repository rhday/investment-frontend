import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import accountReducer from './reducers/accountReducer';
import {BrowserRouter as Router} from 'react-router-dom';


import 'bootstrap/dist/css/bootstrap.min.css'


import App from './App';

const composeEnhancers = (window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION__()) || compose;

let store = createStore(accountReducer, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>
, 
document.getElementById('root'));

