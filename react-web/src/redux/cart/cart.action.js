import { createAction } from '../utils';

// services.
import { init } from './cart.service';

export const ACTIONS = {
    INIT_CART: 'INIT_CART',
    GET_CART: 'GET_CART',
    UPDATE_CART: 'UPDATE_CART'
};

export const initializers = {
    initCart : (token) => async ( dispatch ) => {
        let cart_id = await init(token);
        return dispatch( createAction( ACTIONS.INIT_CART, cart_id ) )
    },
    getCart : () => async ( dispatch ) => {
        return dispatch( createAction( ACTIONS.GET_CART, {} ) )
    },
    updateCart: () => async ( dispatch ) => {
        return dispatch( createAction( ACTIONS.UPDATE_CART, {} ) )
    }
};
