import { SAVE_BUSINESS_ID } from '../actions/business_actions';

export default function tempReducer(state = null, action) {
    Object.freeze(state);
    console.log(action)
    switch (action.type) {
        case SAVE_BUSINESS_ID:
            return action.id;
        default:
            return state;
    }
}