import { createAction } from '../utils';

// actions.
export const ACTIONS = {
    UPDATE_FILTER : 'UPDATE_FILTER',
    CLEAR_FILTER: 'CLEAR_FILTER'
}

// initializers
export const initializers = {
    updateFilter: ( data ) => {
        return createAction(ACTIONS.UPDATE_FILTER, data);
    },
    clearFilter: () => createAction(ACTIONS.CLEAR_FILTER, {})
};