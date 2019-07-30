import { initializers } from './order.action';

// dispatch from store.
import store from '../store';

export default {
    createOrder: ( token, cart_id, shipping_id, tax_id ) => store.dispatch( initializers.createOrder( token, cart_id, shipping_id, tax_id ) )
}