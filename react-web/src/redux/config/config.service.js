import axios from 'axios';
import cookie from 'react-cookies';
import { api } from '../utils';

const ep_config = `config`;

// the load config method.
export const loadConfig = async () => {
    try {
        let response = await axios.get( `${api}/${ep_config}`);
        if ( response.status === 200 ) {
            // data.
            let { data } = response;
            return data;
        } else {console.log(response.data);return { errors: [{ error: 'An error occurred' }] };}
    } catch ( e ) {
        console.error(e);
        return { errors: [{ error: 'An error occurred' }] };
    }
}