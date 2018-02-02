import {createStore, combineReducers, applyMiddleware} from 'redux'
import {reducer as formReducer} from 'redux-form'
import thunk from 'redux-thunk';
import {loginReducer} from './reducers/loginReducer'
import {signupReducer} from './reducers/signupReducer'

export default createStore(
    combineReducers({
        form: formReducer,
        loginReducer, signupReducer
    }),
    applyMiddleware(thunk)
);

