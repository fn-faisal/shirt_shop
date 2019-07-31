import axios from 'axios';
import cookie from 'react-cookies';
import { api } from '../utils';

const ep_cart = 'shoppingcart';
const ep_init = `${ep_cart}/generateUniqueId`;
const ep_update = `${ep_cart}/update`;
const ep_remove_product = `${ep_cart}/removeProduct`;

export const init = async (token) => {
    try {
        // check from cookie.
        let cart_id = cookie.load('cart_id');
        if ( cart_id ) {
            return {cart_id};
        }
        else {
            // create a new cart id.
            let response = await axios.get( `${api}/${ep_init}`, { headers: { Authorization: token } });
            if ( response.status === 200 ) {
                cookie.save('cart_id', response.data.cart_id);
                return response.data;
            } else console.log(response);
        }
    } catch( e ) {
        console.error(e);
        return { errors: [{ error: 'An error occurred' }] };
    } 
}

export const getCart = async ( token, cart_id ) => {
    try {
        let response = await axios.get( `${api}/${ep_cart}/${cart_id}`, { headers: { Authorization: token } } );
        if ( response.status === 200 ) {
            return { cart: response.data};
        } else console.log(response);
    } catch ( e ) {
        console.error(e);
        return { errors: [{ error: 'An error occurred' }] };
    }
}

export const addToCart = async ( token, cart_id, product_id, attributes, quantity ) => {
    try {
        let response = await axios.post( `${api}/${ep_cart}/add`, { cart_id, product_id, attributes, quantity },{ headers: { Authorization: token } } );
        if ( response.status === 200 ) {
            return response.data;
        } else console.log(response);
    } catch ( e ) {
        console.error(e);
        return { errors: [{ error: 'An error occurred' }] };
    }
}

export const updateCart = async ( token, item_id, quantity ) => {
    try {
        let response = await axios.put( `${api}/${ep_update}/${item_id}`, { quantity },{ headers: { Authorization: token } } );
        if ( response.status === 200 ) {
            return response.data;
        } else console.log(response);
    } catch ( e ) {
        console.error(e);
        return { errors: [{ error: 'An error occurred' }] };
    }
}

export const removeCartItem = async ( token, item_id ) => {
    try {
        let response = await axios.delete( `${api}/${ep_remove_product}/${item_id}`,{ headers: { Authorization: token } } );
        if ( response.status === 200 ) {
            return response.data;
        } else console.log(response);
    } catch ( e ) {
        console.error(e);
        return { errors: [{ error: 'An error occurred' }] };
    }
}