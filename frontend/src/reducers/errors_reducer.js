import { combineReducers } from 'redux';
import session from './session_errors_reducer';
import business from './business_errors_reducer';

const errorsReducer = combineReducers({
    session,
    business
});

export default errorsReducer;