import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as APIUtil from './util/session_api_util';
import configureStore from './store/store';
import registerServiceWorker from './registerServiceWorker';


document.addEventListener('DOMContentLoaded', () => {
    let store = configureStore();
    if (localStorage.jwtToken) {
        APIUtil.setAuthToken(localStorage.jwtToken);
        const decoded = jwt_decode(localStorage.jwtToken);
        store.dispatch(APIUtil.setCurrentUser(decoded));

        const currentTime = Date.now() / 1000;
        if (decoded.exp < currentTime) {
            store.dispatch(APIUtil.logoutUser());
            window.location.href = '/login';
        }
    }
})
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
