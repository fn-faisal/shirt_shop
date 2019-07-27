import { ACTIONS } from './product.action';

// Deconstruct actions for ease of access
const { GET_PRODUCTS, GET_PRODUCT } = ACTIONS;

//-------------------------------------------
// The initial config state.
//-------------------------------------------
const initial = { count: 0, data: [], single: {} };

export default ( state = initial, action ) => { 
    switch ( action.type ) {
        case GET_PRODUCT:
            state = { ...state, ...action.payload };
        break;
        case GET_PRODUCTS:
            state = { ...state, ...action.payload };
        break;
    }   
    return state;
}
