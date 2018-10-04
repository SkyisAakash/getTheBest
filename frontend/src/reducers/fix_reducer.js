import { SHOW_FIXED_MSG, REMOVE_FIXED_MSG } from '../actions/msg_actions';

const fixMsgReducer = (state=null, action) => {
    Object.freeze(state)
    switch(action.type) {
        case SHOW_FIXED_MSG:
            return action.message;
        case REMOVE_FIXED_MSG:
            return null;
        default:
            return state;
    }
}

export default fixMsgReducer;