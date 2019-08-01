import { ACTIONS } from './order.action';

// utilities.
import { hasError } from '../utils';

// Deconstruct actions for ease of access
const { CREATE_ORDER, GENERATE_TOKEN, MAKE_PAYMENT, SET_CARD } = ACTIONS;

//-------------------------------------------
// The initial auth state.
//-------------------------------------------
const initial = { order_id: undefined, card: { number: '', cvv: '', exp_month: '', exp_year: '' } , token: '', getToken: false, makePayment: false };

export default ( state = initial, action ) => { 
    if ( hasError(action) === true ) return state;
    switch ( action.type ) {
        case MAKE_PAYMENT:
            state = { ...state, ...action.payload, getToken: false, makePayment: false };
        break;
        case GENERATE_TOKEN:
            state = { ...state, ...action.payload, getToken: false, makePayment: true };
        break;
        case CREATE_ORDER:
            state = { ...state, ...action.payload, getToken: true, makePayment: false };
        break;
        case SET_CARD: 
            state = { ...state, ...action.payload };
        break;
    }
    return state;
}