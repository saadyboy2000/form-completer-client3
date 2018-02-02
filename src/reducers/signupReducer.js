import {SIGNUP_SENT, SIGNUP_COMPLETE} from '../actions/signupAction';

const initialState = {
   
};

export const signupReducer = (state=initialState, action) => {
    if (action.type === SIGNUP_SENT) {
        return Object.assign({}, state, {
            userData: action.payload
        });
    }
    else if (action.type === SIGNUP_COMPLETE) {
        console.log("signup complete");
            
    }
    return state;
};