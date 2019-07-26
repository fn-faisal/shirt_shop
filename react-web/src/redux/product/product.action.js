import { createAction } from '../utils';

// services.
import { getProducts } from './product.service';

// actions.
export const ACTIONS = {
    GET_PRODUCTS : 'GET_PRODUCTS'
}

// initializers
export const initializers = {
    getProducts: ( page = 1, filter = {} ) => async ( dispatch ) => {
        // get the product.
        let payload = await getProducts( page, filter );
        return dispatch(createAction(ACTIONS.GET_PRODUCTS, payload));
    }
};
