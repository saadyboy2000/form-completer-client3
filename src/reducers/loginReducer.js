import {LOGIN_SENT, LOGIN_COMPLETE} from '../actions/loginAction';

const initialState = {
   
};

export const loginReducer = (state=initialState, action) => {
    if (action.type === LOGIN_SENT) {
        return Object.assign({}, state, {
            userData: action.payload
        });
    }
    else if (action.type === LOGIN_COMPLETE) {
        console.log("login complete");
            
    }
    return state;
};