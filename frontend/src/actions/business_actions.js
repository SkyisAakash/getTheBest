import axios from 'axios';
import { GET_ERRORS } from '../util/session_api_util';
export const CREATE_BUSINESS = "CREATE_BUSINESS";
export const GET_BUSINESS = "GET_BUSINESS";

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
    console.log("fetching business")
    return axios
        .get(`/api/businesses/${id}`)
        .then(res => {
            dispatch(fetchBusiness(res.data.business))
            return res.data;
        })
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