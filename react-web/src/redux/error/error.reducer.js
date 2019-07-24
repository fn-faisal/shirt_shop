import { ACTIONS as AUTH_ACTIONS} from '../auth/auth.action';

import { hasError } from '../utils';

// Deconstruct actions for ease of access
const { REGISTER } = AUTH_ACTIONS;

//-------------------------------------------
// The initial auth state.
//-------------------------------------------
const initial = [];

export default ( state = initial, action ) => { 
    if ( hasError(action) === false ) return [];
    switch ( action.type ) {
        case REGISTER: 
        break;
    }
    return state;
}