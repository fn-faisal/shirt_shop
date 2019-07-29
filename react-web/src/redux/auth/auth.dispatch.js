// Initializers
import { initializers } from './auth.action';

// dispatch from store.
import store from '../store';

export default {
    register: ( customer ) => store.dispatch( initializers.register(customer) ),
    load: () => store.dispatch( initializers.load() ),
    login: ( credentials ) => store.dispatch( initializers.login(credentials) ),
    loginFacebook: ( access_token ) => store.dispatch( initializers.loginFacebook(access_token) ),
    logout: () => store.dispatch( initializers.logout() ),
    updateUser: ( token, data ) => store.dispatch( initializers.updateUser( token, data ) )
}