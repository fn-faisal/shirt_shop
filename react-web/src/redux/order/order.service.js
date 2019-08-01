import axios from 'axios';
import { api } from '../utils';

const ep_order = 'orders';
const ep_stripe = 'stripe';
const ep_token = `${ep_stripe}/token`;

export const createOrder = async ( token, cart_id, shipping_id, tax_id ) => {
    try {
        // call the api
        let response = await axios.post( `${api}/${ep_order}`, { cart_id, shipping_id, tax_id }, { headers: { Authorization: token } });
        if ( response.status === 200 ) {
            return response.data;
        } else console.error(response); 
    } catch (e) {
        console.error(e);
        return { errors: [{ error: 'An error occurred' }] };
    }
}

export const generateToken = async ( token, card ) => {
    try {
        let response = await axios.post( `${api}/${ep_token}`, card, { headers: { Authorization: token } });
        if ( response.status === 200 ) {
            console.log(response.data);
            return response.data;
        } else console.error(response);
    } catch( e ) {
        console.error(e);
        return { errors: [{ error: 'An error occurred' }] };
    }
}

export const makePayment = async ( token, order_id, stripeToken, description, amount ) => {
    try {
        let response = await axios.post( `${api}/${ep_stripe}`, {order_id, stripeToken, description, amount}, { headers: { Authorization: token } });
        if ( response.status === 200 ) {
            console.log(response.data);
            return response.data;
        } else console.error(response);
    } catch( e ) {
        console.error(e);
        return { errors: [{ error: 'An error occurred' }] };
    }
}