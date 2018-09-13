import axios from 'axios';
export const CREATE_REVIEW = "CREATE_REVIEW";
export const GET_REVIEW_ERRORS = "GET_REVIEW_ERRORS";

export const createReview = review => dispatch => {
    return axios
        .post('/api/reviews/register', review)
        .then(res => {
            dispatch(addReview(res.data.review))
        })
        .catch(err => dispatch({
            type: GET_REVIEW_ERRORS,
            payload: err.response.data
        }))
}

export const addReview = review => {
    return {
        type: CREATE_REVIEW,
        review
    }
}