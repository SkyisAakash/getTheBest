export const GET_CATEGORIES = "GET_CATEGORIES";
import axios from 'axios';


export const getCategories = () => dispatch => {
    return axios
        .get('api/categories')
        .then( res => {
            dispatch(fetchCategories(res))
        })
}

export const fetchCategories = categories => {
    return {
        type: GET_CATEGORIES,
        categories: categories
    }
}