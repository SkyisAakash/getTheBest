import merge from 'lodash/merge';
import { CREATE_BUSINESS } from '../actions/business_actions';

const businessesReducer = (state={}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case CREATE_BUSINESS:
            return merge({}, state, action.business)
        default:
            return state
    }
}

export default businessesReducer;