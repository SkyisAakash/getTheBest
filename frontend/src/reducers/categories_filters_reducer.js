import { RECEIVE_CATEGORY_FILTER, REMOVE_CATEGORY_FILTER } from "../actions/filter_actions";



const categoryFilterReducer = (state=[],action) => {
    Object.freeze(state)
    switch(action.type) {
        case RECEIVE_CATEGORY_FILTER:
            return [action.filter].concat(state)
        case REMOVE_CATEGORY_FILTER:
            let newState = [].concat(state)
            let index = newState.indexOf(action.category)
            newState.splice(index,1)
            return newState;
        default:
            return state;
    }
}

export default categoryFilterReducer;