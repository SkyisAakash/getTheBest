import { combineReducers } from 'redux';

import categories from './categories_filters_reducer';

const filtersReducer = combineReducers({
    categories
});

export default filtersReducer;