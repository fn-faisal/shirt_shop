// initializers
import { initializers } from './product.action';

// store for dispatching jobs.
import store from '../store';

// dispatch.
export default {
    getProducts: ( page = 1, filter = {} ) => store.dispatch(initializers.getProducts( page, filter )),
    getProduct: ( id ) => store.dispatch( initializers.getProduct(id) ),
    searchProduct: ( queryString, page ) => store.dispatch( initializers.searchProduct( queryString, page ) ),
    searching: ( isSearching ) => store.dispatch( initializers.searching( isSearching ) ),
    clearSearch: () => store.dispatch( initializers.clearSearch() )
};
