import { GET_ERRORS, REMOVE_ERRORS } from '../util/session_api_util';
import {CREATE_BUSINESS} from '../actions/business_actions';
export default (state=[], action) => {
    switch(action.type) {
        case GET_ERRORS:
            return action.payload
        case CREATE_BUSINESS:
            return []
        default:
            return state
    }
}