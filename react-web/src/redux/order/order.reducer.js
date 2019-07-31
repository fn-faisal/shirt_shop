import { ACTIONS } from './order.action';

// utilities.
import { hasError } from '../utils';

// Deconstruct actions for ease of access
const { CREATE_ORDER, GENERATE_TOKEN } = ACTIONS;

//-------------------------------------------
// The initial auth state.
//-------------------------------------------
const initial = { order_id: undefined, token: '' };

export default ( state = initial, action ) => { 
    console.log(action.payload);
    if ( hasError(action) === true ) return state;
    switch ( action.type ) {
        case GENERATE_TOKEN:
        case CREATE_ORDER:
            state = { ...state, ...action.payload }
        break;
    }
    return state;
}