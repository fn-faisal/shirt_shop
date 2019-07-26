// initializers
import { initializers } from './filter.action';

// store for dispatching jobs.
import store from '../store';

// dispatch.
export default {
    updateFilter: ( data ) => store.dispatch(initializers.updateFilter(data)),
    clearFilter: () => store.dispatch(initializers.clearFilter())
};
