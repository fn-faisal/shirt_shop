import { createAction } from '../utils';

// services.
import { getProducts, getProduct } from './product.service';

// actions.
export const ACTIONS = {
    GET_PRODUCTS : 'GET_PRODUCTS',
    GET_PRODUCT: 'GET_PRODUCT'
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
    }
};
