const stripe = require('stripe')(process.env.STRIPE_SECRET);
const { serverErrorCodes: { misc } } = require('../../utils');

module.exports.chargeCustomer =  ( req, res ) => 
    stripe.charges.create({
        amount: req.body.amount,
        currency: req.body.currency || 'USD',
        token: req.body.stripeToken,
        metadata: { order_id: req.body.order_id, description: req.body.description }
    })
    .then ( charge => res.json(charge) )
    .catch( err => { console.error(err); res.json(misc()) } )

    
