import { CREATE_SERVICE, GET_SERVICE, UPDATE_SERVICE, REMOVE_SERVICE, FETCH_SERVICES } from '../actions/service_actions';
import merge from 'lodash/merge';

const servicesReducer = (state={}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case CREATE_SERVICE:
            return merge({}, state, {[action.service._id]: action.service});
        case GET_SERVICE:
            return merge({}, state, {[action.service._id]: action.service});
        case FETCH_SERVICES:
            return merge({}, state, action.services);
        case UPDATE_SERVICE:
            let newState =  merge({}, state);
            newState[action.service._id] = action.service;
            return newState;
        case REMOVE_SERVICE:
            let reducedState = merge({}, state);
            delete(reducedState[action.service._id])
            return reducedState;
        default:
            return state;
    }
}

export default servicesReducer;
