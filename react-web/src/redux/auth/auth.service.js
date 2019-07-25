import axios from 'axios';

import cookie from 'react-cookies';

import { api } from '../utils';

//const api = `${process.env.API_HOST}:${process.env.API_PORT}/api`;
const ep_customer = `customer`;
const ep_customers = `customers`;
const ep_login = `${ep_customers}/login`;
const ep_login_facebook = `${ep_customers}/facebook`;

export const register = async ( customer ) => {
    try {
        // delete the confirm password field.
        delete customer['confirm-password'];
        // call the api
        let response = await axios.post( `${api}/${ep_customers}`, customer);
        if ( response.status === 200 ) {
            // close the auth dia if open.
            $('#auth-dia').modal('hide');
            let json = response.data;
            let { 
                accessToken, // the access token.
                customer: { schema } 
             } = json;
            
             // no error/ save cookie.
            cookie.save( 'session', JSON.stringify({ token: accessToken, profile: schema }) )
        
            return { token: accessToken, profile: schema }
        } else console.log(response);
    } catch ( e ) {
        console.error(e);
        return { errors: [{ error: 'An error occurred' }] };
    }
}

export const login = async ( credentials ) => {
    try {
        let response = await axios.post( `${api}/${ep_login}`, credentials );
        if ( response.status === 200 ) {
            // close the auth dia if open.
            $('#auth-dia').modal('hide');
            let json = response.data;
            let { 
                accessToken, // the access token.
                customer: { schema } 
             } = json;
            
             // no error/ save cookie.
            cookie.save( 'session', JSON.stringify({ token: accessToken, profile: schema }) )
        
            return { token: accessToken, profile: schema }
        } else console.log(response);
    } catch( e ) {
        console.error(e);
        return { errors: [{ error: 'An error occurred' }] };
    }
}

export const loginFacebook = async ( access_token ) => {
    try {
        let response = await axios.post( `${api}/${ep_login_facebook}`, { access_token } );
        if ( response.status === 200 ) {
            // close the auth dia if open.
            $('#auth-dia').modal('hide');
            let json = response.data;
            let { 
                accessToken, // the access token.
                customer: { schema } 
             } = json;
            
             // no error/ save cookie.
            cookie.save( 'session', JSON.stringify({ token: accessToken, profile: schema }) )
        
            return { token: accessToken, profile: schema }
        } else console.log(response);
    } catch( e ) {
        console.error(e);
        return { errors: [{ error: 'An error occurred' }] };
    }
}

export const loadSession = () => {
    return cookie.load('session');
}

export const endSession = () => cookie.remove('session')
