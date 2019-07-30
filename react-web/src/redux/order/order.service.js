import axios from 'axios';
import { api } from '../utils';

const ep_order = 'orders';

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