import { GET_BUSINESS_ERRORS } from '../actions/business_actions';
import { REMOVE_ERRORS } from '../util/session_api_util';
import {CREATE_BUSINESS} from '../actions/business_actions';
export default (state=[], action) => {
    Object.freeze(state);
    switch(action.type) {
        case GET_BUSINESS_ERRORS:
            return action.payload
        case CREATE_BUSINESS:
            return []
        case REMOVE_ERRORS:
            return []
        default:
            return state
    }
}