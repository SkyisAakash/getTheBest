import { GET_CATEGORIES } from "../actions/category_actions";
import merge from 'lodash/merge';

const categoriesReducer = (state={}, action) => {
    switch (action.type) {
        case GET_CATEGORIES:
            return merge(state, action.categories)
        default:
            return state
    }
}

export default categoriesReducer;