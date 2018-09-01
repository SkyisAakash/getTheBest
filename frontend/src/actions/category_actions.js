import axios from 'axios';
export const GET_CATEGORIES = "GET_CATEGORIES";


export const getCategories = () => dispatch => {
    return axios
        .get('/api/categories/')
        .then( res => {
            dispatch(fetchCategories(res.data.categories))
        })
}

export const fetchCategories = categories => {
    return {
        type: GET_CATEGORIES,
        categories
    }
}