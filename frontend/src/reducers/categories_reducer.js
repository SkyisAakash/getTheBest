import { GET_CATEGORIES } from "../actions/category_actions";
import merge from 'lodash/merge';
import { CREATE_SERVICE, UPDATE_SERVICE, REMOVE_SERVICE } from "../actions/service_actions";

const categoriesReducer = (state={}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case GET_CATEGORIES:
            return merge({}, state, action.categories)
        case CREATE_SERVICE:
            let newState = merge({}, state)
            newState[action.service.category].services.push(action.service._id)
            return newState;
        case UPDATE_SERVICE:
            let updatedState = merge({}, state)
            updatedState[action.service.category].services.push(action.service._id)
            return updatedState;
        case REMOVE_SERVICE:
            let reducedState = merge({}, state)
            let array = reducedState[action.service.category].services
            for (let index = 0; index < array.length; index++) {
                if(action.service._id === array[index])array.splice(index, 1)
            }
            reducedState[action.service.category].services = array;
            return reducedState;
        default:
            return state
    }
}

export default categoriesReducer;