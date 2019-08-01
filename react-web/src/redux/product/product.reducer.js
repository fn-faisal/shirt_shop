import { ACTIONS } from './product.action';

// Deconstruct actions for ease of access
const { GET_PRODUCTS, GET_PRODUCT, SEARCH_PRODUCT, SEARCHING, CLEAR_SEARCH } = ACTIONS;

//-------------------------------------------
// The initial config state.
//-------------------------------------------
const initial = { count: 0, data: [], single: {}, search_result: [], searching: false };

export default ( state = initial, action ) => { 
    switch ( action.type ) {
        case GET_PRODUCT:
        case GET_PRODUCTS:
        case SEARCH_PRODUCT:
        case CLEAR_SEARCH:
            state = { ...state, ...action.payload, searching: false };
        break;
        case SEARCHING: 
            state = { ...state, ...action.payload, searching: true };
        break;
    }   
    return state;
}
