import { CREATE_SERVICE, GET_SERVICE, UPDATE_SERVICE } from '../actions/service_actions';
import merge from 'lodash/merge';

const servicesReducer = (state={}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case CREATE_SERVICE:
            return merge({}, state, {[action.service._id]: action.service});
        case GET_SERVICE:
            return merge({}, state, {[action.service._id]: action.service});
        case UPDATE_SERVICE:
            let newState =  merge({}, state);
            newState[action.service._id] = action.service;
            return newState;
        default:
            return state;
    }
}

export default servicesReducer;
