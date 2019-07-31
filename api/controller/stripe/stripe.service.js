const stripe = require('stripe')(process.env.STRIPE_SECRET);
const { serverErrorCodes: { misc } } = require('../../utils');

module.exports.chargeCustomer =  ( req, res ) => 
    stripe.charges.create({
        amount: req.body.amount,
        currency: req.body.currency || 'USD',
        source: req.body.stripeToken,
        metadata: { order_id: req.body.order_id, description: req.body.description }
    })
    .then ( charge => res.json(charge) )
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