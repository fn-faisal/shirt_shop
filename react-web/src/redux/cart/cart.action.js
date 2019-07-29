import { createAction } from '../utils';

// services.
import { init, getCart, addToCart, updateCart, removeCartItem } from './cart.service';

export const ACTIONS = {
    INIT_CART: 'INIT_CART',
    GET_CART: 'GET_CART',
    ADD_TO_CART: 'ADD_TO_CART',
    UPDATE_CART: 'UPDATE_CART',
    REMOVE_CART_ITEM: 'REMOVE_CART_ITEM'
};

export const initializers = {
    initCart : (token) => async ( dispatch ) => {
        let cart_id = await init(token);
        return dispatch( createAction( ACTIONS.INIT_CART, cart_id ) )
    },
    addToCart : ( token, cart_id, product_id, attributes, quantity ) => async ( dispatch ) => {
        let cart = await addToCart(token, cart_id, product_id, attributes, quantity);
        console.log(`add to cart : ${JSON.stringify(cart)}`);
        return dispatch( createAction( ACTIONS.ADD_TO_CART, cart ) );
    },
    getCart : ( token, cart_id ) => async ( dispatch ) => {
        let cart = await getCart(token, cart_id);
        return dispatch( createAction( ACTIONS.GET_CART, cart ) )
    },
    updateCart: ( token, item_id, quantity ) => async ( dispatch ) => {
        let cart = await updateCart( token, item_id, quantity );
        return dispatch( createAction( ACTIONS.UPDATE_CART, cart ) );
    },
    removeCartItem: ( token, item_id ) => async ( dispatch ) => {
        let cart = await removeCartItem( token, item_id );
        return dispatch( createAction( ACTIONS.REMOVE_CART_ITEM, cart ) );
    }
};
