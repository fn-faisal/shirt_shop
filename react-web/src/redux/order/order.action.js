import { createAction } from '../utils';

// services.
import { createOrder } from './order.service';

export const ACTIONS = {
    CREATE_ORDER: 'CREATE_ORDER'
} 

export const initializers = {
    createOrder: ( token, cart_id, shipping_id, tax_id ) => async ( dispatch ) => {
        let payload = await createOrder( token, cart_id, shipping_id, tax_id );
        return dispatch(createAction( ACTIONS.CREATE_ORDER, {order: payload} ));
    }
};