import { createAction } from '../utils';

// services.
import { register, loadSession, login, endSession } from './auth.service';

export const ACTIONS = {
    REGISTER: 'REGISTER',
    LOGIN: 'LOGIN',
    LOAD: 'LOAD',
    LOGOUT: 'LOGOUT'  
} 

export const initializers = {
    register: ( customer ) => async (dispatch) => {
        // login the user.
        let payload = await register(customer);
        return dispatch( createAction( ACTIONS.REGISTER, payload ) );
    },
    load : () => {
        // load session from cookie if available.
        let session = loadSession();
        return createAction( ACTIONS.LOAD, session );
    },
    login : (credentials) => async (dispatch) => {
        let payload = await login(credentials);
        return dispatch(createAction( ACTIONS.LOGIN, payload ));
    },
    logout: () => {
        let payload = endSession();
        console.log(payload);
        return createAction( ACTIONS.LOGOUT, { profile: {}, token: undefined } )
    }
}