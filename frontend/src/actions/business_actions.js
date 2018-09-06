import axios from 'axios';
import { GET_ERRORS } from '../util/session_api_util';
export const CREATE_BUSINESS = "CREATE_BUSINESS";
export const GET_BUSINESS = "GET_BUSINESS";
export const UPDATE_BUSINESS = "UPDATE_BUSINESS";
export const SAVE_BUSINESS_ID = "SAVE_BUSINESS_ID";
export const DELETE_BUSINESS = "DELETE_BUSINESS";
export const createBusiness = (business) => dispatch => {
    // console.log("in actions")
    return axios
        .post('/api/businesses/register', business)
        .then(res => {
            dispatch(newBusiness(res.data.business))
            return res.data;
        })
        .catch(err => 
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        }))
};

export const getBusiness = id => dispatch => {
    return axios
        .get(`/api/businesses/${id}`)
        .then(res => {
            dispatch(fetchBusiness(res.data.business))
            return res.data;
        })
}

export const updateBusiness = (business, id) => dispatch => {
    return axios
        .put(`api/businesses/${id}`, business)
        .then(res => {
            dispatch(editBusiness(res.data.business))
            return res.data;
        })
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        )
}

export const removeBusiness = id => dispatch => {
    return axios
        .delete(`api/business/${id}`)
        .then(res => {
            dispatch(DeleteBusiness(res.data.business))
        })
        .catch(err => dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        }))
}

export const DeleteBusiness = id => {
    return {
        type: DELETE_BUSINESS,
        id
    }
}

export const saveBusinessId = id => dispatch => {
    return dispatch(saveBusinessToStore(id))
}

export const saveBusinessToStore = id => {
    return {
        type: SAVE_BUSINESS_ID,
        id
    }
}

export const editBusiness = business => {
    return {
        type: UPDATE_BUSINESS,
        business
    }
}

export const fetchBusiness = business => {
    return {
        type: GET_BUSINESS,
        business
    }
}

export const newBusiness = business => {
    return {
        type: CREATE_BUSINESS,
        business
    }
}