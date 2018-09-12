import axios from 'axios';
export const CREATE_REVIEW = "CREATE_REVIEW";

export const createReview = review => dispatch => {
    return axios
        .post('/api/reviews/register', review)
        .then(res => {
            dispatch(addReview(res.data.review))
        })
}

export const addReview = review => {
    return {
        type: CREATE_REVIEW,
        review
    }
}