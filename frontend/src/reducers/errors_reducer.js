import { combineReducers } from 'redux';
import session from './session_errors_reducer';
import business from './business_errors_reducer';
import service from './service_errors_reducer';
import review from './review_errors_reducer';

const errorsReducer = combineReducers({
    session,
    business,
    service,
    review
});

export default errorsReducer;