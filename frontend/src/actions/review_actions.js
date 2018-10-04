import axios from 'axios';
export const CREATE_REVIEW = "CREATE_REVIEW";
export const GET_REVIEW_ERRORS = "GET_REVIEW_ERRORS";
export const GET_REVIEWS = "GET_REVIEWS";

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

export const getReviews = (request) => dispatch => {
    return axios
        .get(`/api/reviews/${request.type}/${request.id}`)
        .then(res => {
            dispatch(fetchReviews(res.data.reviews))
        })
}

export const fetchReviews = reviews => {
    return {
        type: GET_REVIEWS,
        reviews
    }
}

export const addReview = review => {
    return {
        type: CREATE_REVIEW,
        review
    }
}