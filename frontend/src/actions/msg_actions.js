export const SHOW_FIXED_MSG = "SHOW_FIXED_MSG";
export const REMOVE_FIXED_MSG = "REMOVE_FIXED_MSG";

export const showFixedMsg = msg => dispatch => {
    return dispatch({type: SHOW_FIXED_MSG, message: msg})
}

export const removeFixedMsg = () => dispatch => {
    return dispatch({type: REMOVE_FIXED_MSG})
}