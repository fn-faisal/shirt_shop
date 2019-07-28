import axios from 'axios';
import { api } from '../utils';

const ep_cart = 'shoppingcart';
const ep_init = `${ep_cart}/generateUniqueId`;

export const init = async (token) => {
    try {
        let response = await axios.get( `${api}/${ep_init}`, { headers: { Authorization: token } });
        if ( response.status === 200 ) {
            return response.data;
        } else console.log(response);
    } catch( e ) {
        console.error(e);
        return { errors: [{ error: 'An error occurred' }] };
    }
}