const { check } = require('express-validator');
const { stripeErrorCodes: { empty } } = require('../../utils');

module.exports.validate_charge = [
    check('stripeToken').not().isEmpty().withMessage( empty('stripe token') ),
    check('order_id').not().isEmpty().withMessage( empty('order_id') ),
    check('description').not().isEmpty().withMessage( empty('description') ),
    check('amount').not().isEmpty().withMessage( empty('amount') )
]