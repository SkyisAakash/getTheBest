import { GET_REVIEW_ERRORS, CREATE_REVIEW } from "../actions/review_actions";
import { REMOVE_ERRORS } from "../util/session_api_util";


export default(state=[], action) => {
    Object.freeze(state);
    switch(action.type){
        case GET_REVIEW_ERRORS:
            return action.payload;
        case REMOVE_ERRORS:
            return [];
        case CREATE_REVIEW:
            return [];
        default:
            return state;
    }
}