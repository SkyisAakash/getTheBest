import { SAVE_BUSINESS_ID } from '../actions/business_actions';
import { CLOSE_MODAL } from '../actions/modal_actions';

export default function tempReducer(state = null, action) {
    Object.freeze(state);
    console.log(action)
    switch (action.type) {
        case SAVE_BUSINESS_ID:
            return action.id;
        case CLOSE_MODAL:
            return null;
        default:
            return state;
    }
}