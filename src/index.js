import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import accountReducer from './reducers/accountReducer';
import {BrowserRouter as Router} from 'react-router-dom';
import usersReducer from './reducers/usersReducer';
import currentUserReducer from './reducers/currentUserReducer';


import 'bootstrap/dist/css/bootstrap.min.css'


import App from './App';

const reducer = combineReducers({
    users: usersReducer,
    current_user: currentUserReducer,
    accounts: accountReducer
})

const composeEnhancers = (window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION__()) || compose;

let store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>
, 
document.getElementById('root'));

