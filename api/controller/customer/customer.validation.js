const { check } = require('express-validator');
const { userErrorCodes: { empty } } = require('../../utils');
const { Customer } = require('../../model/schema');

module.exports.update_customer_validation = [
    check('name').not().isEmpty().withMessage( empty('name') ).trim().escape(),
    check('email').not().isEmpty().withMessage( empty('email') ).trim().escape()
];