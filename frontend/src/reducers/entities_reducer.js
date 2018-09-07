import { combineReducers } from 'redux';
import categories from './categories_reducer';
import businesses from './businesses_reducer';
import services from './services_reducer';
export default combineReducers({
    categories,
    businesses,
    services
})