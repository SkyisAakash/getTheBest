import { CREATE_SERVICE, GET_SERVICE } from '../actions/service_actions';
import merge from 'lodash/merge';

const servicesReducer = (state={}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case CREATE_SERVICE:
            return merge({}, state, {[action.service._id]: action.service});
        case GET_SERVICE:
            return merge({}, state, {[action.service._id]: action.service});
        default:
            return state;
    }
}

export default servicesReducer;
