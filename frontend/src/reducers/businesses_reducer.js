import merge from 'lodash/merge';
import { CREATE_BUSINESS, GET_BUSINESS, UPDATE_BUSINESS } from '../actions/business_actions';

const businessesReducer = (state={}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case CREATE_BUSINESS:
            return merge({}, state, {[action.business._id]: action.business})
        case GET_BUSINESS:
            return merge({}, state, {[action.business._id]: action.business})
        case UPDATE_BUSINESS:
            let newState = merge({}, state);
            newState[action.business._id] = action.business;
            return newState;
        default:
            return state
    }
}

export default businessesReducer;