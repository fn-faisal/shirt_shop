// Initializers
import { initializers } from './cart.action';

// dispatch from store.
import store from '../store';

export default {
    initCart : (token) => store.dispatch( initializers.initCart(token) ),
    getCart : ( token, cart_id ) => store.dispatch( initializers.getCart(token, cart_id) ),
    removeCartItem : ( token, cart_id ) => store.dispatch( initializers.removeCartItem( token, cart_id ) ),
    updateCart: ( token, item_id, quantity ) => store.dispatch( initializers.updateCart( token, item_id, quantity ) ),
    addToCart: ( token, cart_id, product_id, attributes, quantity ) => store.dispatch( initializers.addToCart( token, cart_id, product_id, attributes, quantity ) )
}