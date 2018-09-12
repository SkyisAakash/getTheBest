import merge from 'lodash/merge';
import { CREATE_REVIEW } from '../actions/review_actions';

export default (state={}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case CREATE_REVIEW:
            return merge({}, state, {[action.review._id]: action.review})
        default:
            return state;
    }
}