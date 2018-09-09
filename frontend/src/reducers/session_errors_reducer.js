import { GET_SESSION_ERRORS, RECEIVE_CURRENT_USER, REMOVE_ERRORS } from '../util/session_api_util';
export default (state = [], action) => {
    Object.freeze(state);
    switch(action.type) {
        case GET_SESSION_ERRORS:
            return action.payload;
        case RECEIVE_CURRENT_USER:
            return [];
        case REMOVE_ERRORS:
            return [];
        default:
            return state;
    }
}