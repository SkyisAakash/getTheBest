import { combineReducers } from 'redux';
import modal from './modal_reducer';
import temp from './temp_reducer';
import fixMsg from './fix_reducer';
export default combineReducers({
    modal,
    temp,
    fixMsg
})