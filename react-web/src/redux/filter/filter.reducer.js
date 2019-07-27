import { ACTIONS } from './filter.action';

// Deconstruct actions for ease of access
const { UPDATE_FILTER, CLEAR_FILTER } = ACTIONS;

//-------------------------------------------
// The initial config state.
//-------------------------------------------
const initial = { size: undefined, size_id: undefined, color: undefined, color_id: undefined, priceRangeMin: undefined, priceRangeMax: undefined, department: undefined, department_ids: undefined, category: undefined, category_id: undefined, departments: undefined };

export default ( state = initial, action ) => { 
    switch ( action.type ) {
        case UPDATE_FILTER:
            state = { ...state, ...action.payload };
        break;
        case CLEAR_FILTER:
            state = {...initial};
        break;
    }
    return state;
}
