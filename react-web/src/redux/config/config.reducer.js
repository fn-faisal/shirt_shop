import { ACTIONS } from './config.action';

// utilities.
import { hasError } from '../utils';

// Deconstruct actions for ease of access
const { LOAD_CONFIG } = ACTIONS;

//-------------------------------------------
// The initial config state.
//-------------------------------------------
const initial = { colors: [], sizes: [], max_value: 10, departments : [], categories: [], shipping_regions: [], shipping: [] , tax: {}};

export default ( state = initial, action ) => { 
    if ( hasError(action) === true ) return state;
    switch ( action.type ) {
        case LOAD_CONFIG:
            state = { ...state, ...action.payload };
        break;
    }
    return state;
}