// Initializers
import { initializers } from './cart.action';

// dispatch from store.
import store from '../store';

export default {
    initCart : (token) => store.dispatch( initializers.initCart(token) ),
    getCart : ( token, cart_id ) => store.dispatch( initializers.getCart(token, cart_id) ),
    addToCart: ( token, cart_id, product_id, attributes, quantity ) => store.dispatch( initializers.addToCart( token, cart_id, product_id, attributes, quantity ) )
}