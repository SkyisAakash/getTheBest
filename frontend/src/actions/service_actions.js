import axios from 'axios';
export const GET_SERVICE_ERRORS = "GET_SERVICE_ERRORS";
export const CREATE_SERVICE = "CREATE_SERVICE";
export const GET_SERVICE = "GET_SERVICE";
export const UPDATE_SERVICE = "UPDATE_SERVICE";

export const createService = service => dispatch => {
    return axios
        .post('/api/services/register', service)
        .then(res => {
            dispatch(newService(res.data.service))
            return res.data;
        })
        .catch(err => 
            dispatch({
            type: GET_SERVICE_ERRORS,
            payload: err.response.data
        }))
}


export const getService = id => dispatch => {
    return axios
        .get(`/api/services/${id}`)
        .then(res => {
            dispatch(receiveService(res.data.service))
            return res.data;
        })
}

export const updateService = (service, id) => dispatch => {
    console.log(service)
    return axios
        .put(`/api/services/${id}`, service)
        .then(res => {
            dispatch(receiveUpdatedService(res.data.service))
            return res.data;
        })
}

export const receiveUpdatedService = service => ({
    type: UPDATE_SERVICE,
    service
})

export const receiveService = service => ({
    type: GET_SERVICE,
    service
})
export const newService = service => ({
    type: CREATE_SERVICE,
    service
})