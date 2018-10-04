import axios from 'axios';
import { receiveServices } from './service_actions';
export const RECEIVE_CATEGORY_FILTER = "RECEIVE_CATEGORY_FILTER";
export const REMOVE_CATEGORY_FILTER = "REMOVE_CATEGORY_FILTER";
export const REMOVE_CATEGORY_FILTERS = "REMOVE_CATEGORY_FILTERS";

export const getCategoryFilter = filter =>  dispatch => {
    return axios
        .get(`api/services/category/${filter}`)
        .then(res => {
            dispatch(receiveServices(res.data.services))
            dispatch(receiveCategoryFilter(filter))
            return res.data
        })
}

export const removeAllCategoryFilters = () => dispatch => {
    return dispatch({type: REMOVE_CATEGORY_FILTERS})
}

export const removeCategoryFilter = (filter) => dispatch => {
    return dispatch({type: REMOVE_CATEGORY_FILTER, category: filter})
}
export const receiveCategoryFilter = filter => ({
    type: RECEIVE_CATEGORY_FILTER,
    filter
})


