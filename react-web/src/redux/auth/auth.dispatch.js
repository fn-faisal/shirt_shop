// Initializers
import { initializers } from './auth.action';

// dispatch from store.
import store from '../store';

export default {
    register: ( customer ) => store.dispatch( initializers.register(customer) )
}