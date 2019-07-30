import { ACTIONS } from './order.action';

// utilities.
import { hasError } from '../utils';

// Deconstruct actions for ease of access
const { CREATE_ORDER } = ACTIONS;

//-------------------------------------------
// The initial auth state.
//-------------------------------------------
const initial = { order_id: undefined };

export default ( state = initial, action ) => { 
    if ( hasError(action) === true ) return state;
    switch ( action.type ) {
        case CREATE_ORDER:
            state = { ...state, ...action.payload }
        break;
    }
    return state;
}