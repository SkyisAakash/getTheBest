import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from '../reducers/root_reducer';
const configureStoreDev = (preloadedState = {}) => (
    createStore(
        rootReducer,
        preloadedState,
        applyMiddleware(thunk, logger)
    )
);
const configureStoreProd = (preloadedState = {}) => (
    createStore(
        rootReducer,
        preloadedState,
        applyMiddleware(thunk)
    )
);
let configureStore;
if (process.env.NODE_ENV === 'production')configureStore=configureStoreProd;
else configureStore=configureStoreDev;


export default configureStore;