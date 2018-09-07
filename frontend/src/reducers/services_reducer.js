import { CREATE_SERVICE } from '../actions/service_actions';
import merge from 'lodash/merge';

const servicesReducer = (state={}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case CREATE_SERVICE:
            return merge({}, state, {[action.service.id]: action.service});
        default:
            return state;
    }
}

export default servicesReducer;
