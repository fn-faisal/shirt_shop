import axios from 'axios';
import { api } from '../utils';

const ep_products = 'products';

export const getProducts = async () => {
    try { 
        let response = await axios.get( `${api}/${ep_products}?limit=9`);
        if ( response.status === 200 ) {
            let { count, rows } = response.data; 
            return { count, data: rows };
        } else console.log(response);
    } catch (e) {
        console.error(e);
        return { errors: [{ error: 'An error occurred' }] };
    } 
}