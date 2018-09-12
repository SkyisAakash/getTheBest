import { RECEIVE_CURRENT_USER } from '../util/session_api_util';
import { CREATE_REVIEW } from '../actions/review_actions';
import merge from 'lodash/merge';
const _nullUser = Object.freeze({
    id: null
});

const sessionReducer = ( state = _nullUser, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_CURRENT_USER:
            return {
                id: action.payload.id,
                firstname: action.payload.firstname,
                lastname: action.payload.lastname,
                email: action.payload.email
            }
        case CREATE_REVIEW:
            let res = state.reviews || [];
            res.push(action.review._id)
            return merge({}, {reviews: res})
        default:
            return state;
    }
}

export default sessionReducer;