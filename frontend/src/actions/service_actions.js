import axios from 'axios';
export const GET_SERVICE_ERRORS = "GET_SERVICE_ERRORS";
export const CREATE_SERVICE = "CREATE_SERVICE";
export const GET_SERVICE = "GET_SERVICE";
export const UPDATE_SERVICE = "UPDATE_SERVICE";
export const REMOVE_SERVICE = "REMOVE_SERVICE";
export const FETCH_SERVICES = "FETCH_SERVICES";

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

export const getServices = request => dispatch => {
    return axios
        .get(`api/services/${request.field}/${request.parameter}`)
        .then(res => {
            dispatch(receiveServices(res.data.service))
            return res.data;
        })
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
    return axios
        .put(`/api/services/${id}`, service)
        .then(res => {
            dispatch(receiveUpdatedService(res.data.service))
            return res.data;
        })
        .catch(err => 
        dispatch({
            type: GET_SERVICE_ERRORS,
            payload: err.response.data
        }))
}

export const deleteService = id => dispatch => {
    return axios
        .delete(`/api/services/${id}`)
        .then(res => {
            dispatch(removeService(res.data.service))
            return res.data;
        })
}

export const removeService = service => ({
    type: REMOVE_SERVICE,
    service
})

export const receiveUpdatedService = service => ({
    type: UPDATE_SERVICE,
    service
})

export const receiveService = service => ({
    type: GET_SERVICE,
    service
})

export const receiveServices = services => ({
    type: FETCH_SERVICES,
    services
})
export const newService = service => ({
    type: CREATE_SERVICE,
    service
})