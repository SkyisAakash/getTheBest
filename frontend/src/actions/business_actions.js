import axios from 'axios';
import { GET_ERRORS } from '../util/session_api_util';
export const CREATE_BUSINESS = "CREATE_BUSINESS";

export const createBusiness = (business) => dispatch => {
    // console.log("in actions")
    return axios
        .post('/api/businesses/register', business)
        .then(res => {
            dispatch(newBusiness(res.data.business))
        })
        .catch(err => 
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        }))
};

export const newBusiness = business => {
    return {
        type: CREATE_BUSINESS,
        business
    }
}