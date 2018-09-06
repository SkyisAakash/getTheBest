import merge from 'lodash/merge';
import { CREATE_BUSINESS, GET_BUSINESS, UPDATE_BUSINESS, DELETE_BUSINESS } from '../actions/business_actions';
import { CLOSE_MODAL } from '../actions/modal_actions';
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
        case CLOSE_MODAL:
        if (action.modal) {
                let otherState = merge({}, state);
                otherState[action.id] = action.modal;
                return otherState;
            }
            else return state;
        case DELETE_BUSINESS:
            let smallerState = merge({}, state);
            delete (smallerState[action.id])
            return smallerState;
        default:
            return state
    }
}

export default businessesReducer;