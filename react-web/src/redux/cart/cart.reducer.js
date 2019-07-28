import { ACTIONS } from './cart.action';

// utilities.
import { hasError } from '../utils';

// Deconstruct actions for ease of access
const { INIT_CART } = ACTIONS;

const inital = { cart_id: undefined };

export default ( state = inital, action ) => {
    if ( hasError(action) === true ) return state;
    switch ( action.type ) {
        case INIT_CART: 
            state = { ...state, ...action.payload };
        break;
    }
    return state;
}