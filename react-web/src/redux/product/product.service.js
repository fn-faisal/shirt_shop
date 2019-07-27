import axios from 'axios';
import { api } from '../utils';

const ep_products = 'products';

export const getProducts = async ( page, filter = {} ) => {
    try { 
        
        let filterQuery = Object.keys(filter).map( (fk, i) => filter[fk] !== undefined ? `${fk}=${filter[fk]};` : '' ).join('');
        
        let response = await axios.get( `${api}/${ep_products}?limit=9&page=${page}&filter=${filterQuery}`);
        if ( response.status === 200 ) {
            let { count, rows } = response.data; 
            return { count, data: rows };
        } else console.log(response);
    } catch (e) {
        console.error(e);
        return { errors: [{ error: 'An error occurred' }] };
    } 
}