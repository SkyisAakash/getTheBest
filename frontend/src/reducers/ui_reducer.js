import { combineReducers } from 'redux';
import modal from './modal_reducer';
import temp from './temp_reducer';
export default combineReducers({
    modal,
    temp
})