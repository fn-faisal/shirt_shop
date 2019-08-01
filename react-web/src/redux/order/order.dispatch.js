import { initializers } from './order.action';

// dispatch from store.
import store from '../store';

export default {
    createOrder: ( token, cart_id, shipping_id, tax_id ) => store.dispatch( initializers.createOrder( token, cart_id, shipping_id, tax_id ) ),
    generateToken: ( token, card ) => store.dispatch( initializers.generateToken( token, card ) ),
    makePayment: ( token, order_id, stripeToken, description, amount ) => store.dispatch( initializers.makePayment( token, order_id, stripeToken, description, amount ) ),
    setCard: ( card ) => store.dispatch( initializers.setCard( card ) ) 
}