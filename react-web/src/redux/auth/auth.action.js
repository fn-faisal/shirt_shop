import { createAction } from '../utils';

// services.
import { register } from './auth.service';

export const ACTIONS = {
    REGISTER: 'REGISTER',
    LOGIN: 'LOGIN'  
} 

export const initializers = {
    register: ( customer ) => async (dispatch) => {
        // login the user.
        await register(customer);
        return dispatch( createAction( ACTIONS.REGISTER, {} ) )
    }   
}