const stripe = require('stripe')(process.env.STRIPE_SECRET);
const { serverErrorCodes: { misc } } = require('../../utils');
const { Orders } = require('../../model/schema');

module.exports.chargeCustomer =  ( { body: { amount, currency, stripeToken, order_id, description } } = req, res ) => 
    stripe.charges.create({
        amount: amount * 100,
        currency: currency || 'USD',
        source: stripeToken,
        metadata: { order_id: order_id+'', description }
    })
    .then ( charge => {
        // update order status.
        Orders.findOne({ where: { order_id } })
        .then( order => order.update({ status: 'payment_processed' }) )
        return res.json(charge)
    })
    .catch( err => { console.error(err); res.json(misc()) } )

module.exports.generateToken = ( { body: { number, cvv, exp_month, exp_year } } = req, res ) =>
    stripe.tokens.create({
        card: {
            number: number,
            exp_month: exp_month,
            exp_year: exp_year,
            cvc: cvv
        }
    }, function(err, token) {
        if ( err ) {
            console.error(err);
            return res.json(misc(err));
        }
        return res.json({ token: token.id });
    });