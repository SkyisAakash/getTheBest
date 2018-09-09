import { CREATE_SERVICE } from '../actions/service_actions';
import { GET_SERVICE_ERRORS } from '../actions/service_actions';
import { REMOVE_ERRORS } from '../util/session_api_util';

export default (state=[], action) => {
    Object.freeze()
    switch(action.type) {
        case CREATE_SERVICE:
            return [];
        case GET_SERVICE_ERRORS:
            return action.payload;
        case REMOVE_ERRORS:
            return [];
        default:
            return [];
    }
}