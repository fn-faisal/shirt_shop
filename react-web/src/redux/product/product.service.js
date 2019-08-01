import axios from 'axios';
import { api } from '../utils';

const ep_products = 'products';
const ep_search = `${ep_products}/search`;

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

export const getProduct = async ( id ) => {
    try { 
        let response = await axios.get( `${api}/${ep_products}/${id}?with_meta=true`);
        if ( response.status === 200 ) {
            return response.data; 
        } else console.log(response);
    } catch (e) {
        console.error(e);
        return { errors: [{ error: 'An error occurred' }] };
    }
}

export const searchProducts = async ( query_string, page ) => {
    try { 
        let response = await axios.get( `${api}/${ep_search}?limit=5&page=${page}&query_string=${query_string}`);
        if ( response.status === 200 ) {
            let { rows } = response.data; 
            return rows;
        } else console.log(response);
    } catch (e) {
        console.error(e);
        return { errors: [{ error: 'An error occurred' }] };
    } 
}