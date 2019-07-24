const { check } = require('express-validator');

module.exports.register_customer_validation = [
    check('name').not().isEmpty().withMessage('Name is required').trim().escape(),
    check('email').not().isEmpty().withMessage('Email is required').isEmail().withMessage('Email is of invalid format').trim().escape(),
    check('password').not().isEmpty().withMessage('Password is required').trim().escape().isLength({ max: 50 }).withMessage('Password can not exceed 50 characters.')
];
