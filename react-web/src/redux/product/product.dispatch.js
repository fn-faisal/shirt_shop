// initializers
import { initializers } from './product.action';

// store for dispatching jobs.
import store from '../store';

// dispatch.
export default {
    getProducts: () => store.dispatch(initializers.getProducts())
};
