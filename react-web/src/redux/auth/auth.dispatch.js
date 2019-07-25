// Initializers
import { initializers } from './auth.action';

// dispatch from store.
import store from '../store';

export default {
    register: ( customer ) => store.dispatch( initializers.register(customer) ),
    load: () => store.dispatch( initializers.load() ),
    login: ( credentials ) => store.dispatch( initializers.login(credentials) ),
    logout: () => store.dispatch( initializers.logout() )
}