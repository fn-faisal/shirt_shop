// Initializers
import { initializers } from './cart.action';

// dispatch from store.
import store from '../store';

export default {
    initCart : (token) => store.dispatch( initializers.initCart(token) )
}