import axios from 'axios';
import jwt_decode from 'jwt-decode';
// const $ = window.$;
export const GET_SESSION_ERRORS = 'GET_SESSION_ERRORS';
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const REMOVE_ERRORS = 'REMOVE_ERRORS';

export const setAuthToken = token => {
    if(token) {
        axios.defaults.headers.common['Authorization'] = token;
    } else {
        delete axios.defaults.headers.common['Authorization'];
    }
};

export const registerUser = (userData, history) => dispatch => {
    return axios.post('/api/users/register', userData)
         .then( res => {
             const { token } = res.data;
             localStorage.setItem('jwtToken', token);
             setAuthToken(token);
             const decoded = jwt_decode(token);
             dispatch(setCurrentUser(decoded));
         })
         .catch(err => {
             console.log(err)
        dispatch({
            type: GET_SESSION_ERRORS,
            payload: err.response.data
        })});

};

export const getUser = (user) => dispatch => {
    return axios.put('/api/users', user)
    .then( res => {
        const { token } = res.data;
        const decoded = jwt_decode(token);
        dispatch(setCurrentUser(decoded))
    })
}

export const loginUser = userData => dispatch => {
    return axios
        .post('/api/users/login', userData)
        .then(res => {
            const { token } = res.data;
            localStorage.setItem('jwtToken', token);
            setAuthToken(token);
            const decoded = jwt_decode(token);
            dispatch(setCurrentUser(decoded));
        })
        .catch(err => 
        dispatch({
            type: GET_SESSION_ERRORS,
            payload: err.response.data
        }));
}

export const setCurrentUser = decoded => {
    return {
        type: RECEIVE_CURRENT_USER,
        payload: decoded
    };
};

export const logoutUser = () => dispatch => {
    localStorage.removeItem('jwtToken');
    setAuthToken(false);
    dispatch(setCurrentUser({}));
}

export const removeErrors = (errors) => ({
    type: REMOVE_ERRORS
})