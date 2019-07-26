import { ACTIONS } from './product.action';

// Deconstruct actions for ease of access
const { GET_PRODUCTS } = ACTIONS;

//-------------------------------------------
// The initial config state.
//-------------------------------------------
const initial = { count: 0, data: [] };

export default ( state = initial, action ) => { 
    switch ( action.type ) {
        case GET_PRODUCTS:
            state = { ...state, ...action.payload };
        break;
    }
    return state;
}
