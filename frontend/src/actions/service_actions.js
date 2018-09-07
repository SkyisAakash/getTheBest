import axios from 'axios';
import { GET_ERRORS } from '../util/session_api_util';
export const CREATE_SERVICE = "CREATE_SERVICE";

export const createService = service => dispatch => {
    return axios
        .post('/api/services/register', service)
        .then(res => {
            dispatch(newService(res.data.service))
            return res.data;
        })
        .catch(err => 
            dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        }))
}

export const newService = service => dispatch({
    type: CREATE_SERVICE,
    service
})