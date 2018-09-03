import axios from 'axios';
export const CREATE_BUSINESS = "CREATE_BUSINESS";

export const createBusiness = (business) => {
    return axios
        .get('/api/businesses/register')
        .then(res => {
            dispatch(newBusiness(res.data.business))
        })
}

export const newBusiness = business => {
    return {
        type: CREATE_BUSINESS,
        business
    }
}