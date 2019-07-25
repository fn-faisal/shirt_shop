import { ACTIONS } from './auth.action';

// utilities.
import { hasError } from '../utils';

// Deconstruct actions for ease of access
const { REGISTER, LOAD, LOGIN, LOGOUT } = ACTIONS;

//-------------------------------------------
// The initial auth state.
//-------------------------------------------
const initial = { profile: {}, token: undefined };

export default ( state = initial, action ) => { 
    if ( hasError(action) === true ) return state;
    switch ( action.type ) {
        case REGISTER: 
        case LOAD: 
        case LOGIN:
        case LOGOUT:
            state = { ...state, ...action.payload };
        break;
    }
    return state;
}