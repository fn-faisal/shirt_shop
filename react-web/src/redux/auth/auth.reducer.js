import { ACTIONS } from './auth.action';

// utilities.
import { hasError } from '../utils';

// Deconstruct actions for ease of access
const { REGISTER, LOAD, LOGIN, LOGIN_FACEBOOK,LOGOUT, UPDATE_USER, LOADING } = ACTIONS;

//-------------------------------------------
// The initial auth state.
//-------------------------------------------
const initial = { profile: {}, token: undefined, loading: false };

export default ( state = initial, action ) => { 
    if ( hasError(action) === true ) return state;
    switch ( action.type ) {
        case LOADING:
            state = { ...state, ...action.payload };
        break;
        case REGISTER: 
            state = { ...state, ...action.payload, loading: false };
        break;
        case LOAD:
            state = { ...state, ...action.payload, loading: false };
        break; 
        case LOGIN:
            state = { ...state, ...action.payload, loading: false };
        break;
        case LOGIN_FACEBOOK:
            state = { ...state, ...action.payload, loading: false };
        break;
        case LOGOUT:
            state = { ...state, ...action.payload, loading: false };
        break;
        case UPDATE_USER:
            state = { ...state, ...action.payload, loading: false };
        break;
    }
    return state;
}