import { ACTIONS } from './cart.action';

// utilities.
import { hasError } from '../utils';

// Deconstruct actions for ease of access
const { INIT_CART, GET_CART, ADD_TO_CART, UPDATE_CART, REMOVE_CART_ITEM } = ACTIONS;

const inital = { cart_id: undefined, cart: [], refresh: false };

export default ( state = inital, action ) => {
    if ( hasError(action) === true ) return state;
    switch ( action.type ) {
        case ADD_TO_CART:
            state = { ...state, ...action.payload, refresh: true };
            break;
        case UPDATE_CART:
            state = { ...state, ...action.payload, refresh: true };
            break;
        case REMOVE_CART_ITEM:
            state = { ...state, ...action.payload, refresh: true };
            break;
        case GET_CART:
            state = { ...state, ...action.payload, refresh: false };
            break;
        case INIT_CART: 
            state = { ...state, ...action.payload, refresh: true };
        break;
    }
    return state;
}