import { createAction } from '../utils';

// services.
import { register, loadSession, login, loginFacebook, endSession, updateUser } from './auth.service';

export const ACTIONS = {
    REGISTER: 'REGISTER',
    LOGIN: 'LOGIN',
    LOGIN_FACEBOOK: 'LOGIN_FACEBOOK',
    UPDATE_USER: 'UPDATE_USER',
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
    loginFacebook : ( token ) => async (dispatch) => {
        let payload = await loginFacebook(token);
        return dispatch(createAction( ACTIONS.LOGIN_FACEBOOK, payload ));
    },
    logout: () => {
        let payload = endSession();
        return createAction( ACTIONS.LOGOUT, { profile: {}, token: undefined } )
    },
    updateUser: (token, data) => async( dispatch ) => {
        console.log(data);
        let payload = await updateUser( token, data );
        return dispatch(createAction( ACTIONS.UPDATE_USER, { profile: payload } ));
    }
}