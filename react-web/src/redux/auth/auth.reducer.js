import { ACTIONS } from './auth.action';
import { hasError } from '../utils';

// Deconstruct actions for ease of access
const { REGISTER } = ACTIONS;

//-------------------------------------------
// The initial auth state.
//-------------------------------------------
const initial = { profile: {}, token: undefined };

export default ( state = initial, action ) => { 
    if ( hasError(action) === true ) return state;
    switch ( action.type ) {
        case REGISTER: 
            state = { ...state, ...action.payload }
        break;
    }
    return state;
}