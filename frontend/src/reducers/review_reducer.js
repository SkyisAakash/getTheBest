import merge from 'lodash/merge';
import { CREATE_REVIEW, GET_REVIEWS } from '../actions/review_actions';

export default (state={}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case CREATE_REVIEW:
            return merge({}, state, {[action.review._id]: action.review})
        case GET_REVIEWS:
            return merge({}, state, action.reviews)
        default:
            return state;
    }
}