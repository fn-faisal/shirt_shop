import { createAction } from '../utils';

// services.
import { getProducts, getProduct, searchProducts } from './product.service';

// actions.
export const ACTIONS = {
    GET_PRODUCTS : 'GET_PRODUCTS',
    GET_PRODUCT: 'GET_PRODUCT',
    SEARCH_PRODUCT: 'SEARCH_PRODUCT',
    SEARCHING: 'SEARCHING',
    CLEAR_SEARCH: 'CLEAR_SEARCH'
}

// initializers
export const initializers = {
    getProducts: ( page = 1, filter = {} ) => async ( dispatch ) => {
        // get products.
        let payload = await getProducts( page, filter );
        return dispatch(createAction(ACTIONS.GET_PRODUCTS, payload));
    },
    getProduct: ( id ) => async ( dispatch ) => {
        // get the product.
        let payload = await getProduct( id );
        return dispatch( createAction( ACTIONS.GET_PRODUCT, { single: payload } ) );
    },
    searchProduct: ( query_string, page ) => async ( dispatch ) => {
        let payload = await searchProducts(query_string, page);
        return dispatch( createAction( ACTIONS.SEARCH_PRODUCT, { search_result: payload} ) );
    },
    searching: ( isSearching ) => createAction( ACTIONS.SEARCHING, { searching: isSearching } ),
    clearSearch: () => createAction( ACTIONS.CLEAR_SEARCH, { search_result: [] } )
};
