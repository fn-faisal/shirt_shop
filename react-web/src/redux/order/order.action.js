import { createAction } from '../utils';

// services.
import { createOrder, generateToken, makePayment } from './order.service';

export const ACTIONS = {
    CREATE_ORDER: 'CREATE_ORDER',
    GENERATE_TOKEN: 'GENERATE_TOKEN',
    MAKE_PAYMENT: 'MAKE_PAYMENT',
    SET_CARD: 'SET_CARD'
} 

export const initializers = {
    createOrder: ( token, cart_id, shipping_id, tax_id ) => async ( dispatch ) => {
        let payload = await createOrder( token, cart_id, shipping_id, tax_id );
        return dispatch(createAction( ACTIONS.CREATE_ORDER, {order_id: payload} ));
    },
    generateToken: ( token, card ) => async ( dispatch ) => {
        // generate token.
        let stripeToken = await generateToken( token, card );
        return dispatch( createAction( ACTIONS.GENERATE_TOKEN, stripeToken ) ); 
    },
    makePayment: ( token, order_id, stripeToken, description, amount ) => async ( dispatch ) => {
        let paymentResponse = await makePayment(token, order_id, stripeToken, description, amount);
        return dispatch( createAction( ACTIONS.MAKE_PAYMENT, paymentResponse ) );
    },
    setCard: ( card ) => createAction( ACTIONS.SET_CARD, { card: card } )   
};