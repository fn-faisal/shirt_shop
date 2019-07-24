import axios from 'axios';

export const register = async ( customer ) => {
    try {
        // call the api
        console.log(`${process.env.API_HOST}:${process.env.API_PORT}`);
    } catch ( e ) {
        console.error(e);
        return { errors: [{ error: 'An error occurred' }] };
    }
}