import { createAction } from '../utils';

// services.
import { createOrder, generateToken } from './order.service';

export const ACTIONS = {
    CREATE_ORDER: 'CREATE_ORDER',
    GENERATE_TOKEN: 'GENERATE_TOKEN'
} 

export const initializers = {
    createOrder: ( token, cart_id, shipping_id, tax_id ) => async ( dispatch ) => {
        let payload = await createOrder( token, cart_id, shipping_id, tax_id );
        return dispatch(createAction( ACTIONS.CREATE_ORDER, {order: payload} ));
    },
    generateToken: (card ) => async ( dispatch ) => {
        // generate token.
        let token = await generateToken(card);
        return dispatch( createAction( ACTIONS.GENERATE_TOKEN, { token }  ) ); 
    }   
};