const { check } = require('express-validator/check');
const { orderErrorCodes: { empty } } = require('../../utils');

module.exports.place_order_validation = [
    check('cart_id').not().isEmpty().withMessage( empty('cart_id') ),
    check('shipping_id').not().isEmpty().withMessage( empty('shipping_id') ),
    check('tax_id').not().isEmpty().withMessage( empty('tax_id') )
];