const { check } = require('express-validator');
const { stripeErrorCodes: { empty } } = require('../../utils');

module.exports.validate_charge = [
    check('stripeToken').not().isEmpty().withMessage( empty('stripe token') ),
    check('order_id').not().isEmpty().withMessage( empty('order_id') ),
    check('description').not().isEmpty().withMessage( empty('description') ),
    check('amount').not().isEmpty().withMessage( empty('amount') )
];

module.exports.create_token_validation = [
    check('number').not().isEmpty().withMessage( empty('credit_debit_number') ),
    check('cvv').not().isEmpty().withMessage( empty('cvv') ),
    check('exp_month').not().isEmpty().withMessage( empty('exp_month') ),
    check('exp_year').not().isEmpty().withMessage( empty('exp_year') )
];