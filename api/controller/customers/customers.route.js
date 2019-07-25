const r = require('express')();

const { registerCustomer, loginCustomer, facebook } = require('./customers.service');
const { register_customer_validation,login_customer_validation, continue_facebook } = require('./customers.validation');
const { validate } = require('../../utils');

// register a customer.
r.post( '/', register_customer_validation, validate, registerCustomer );

// login a user.
r.post('/login', login_customer_validation, validate, loginCustomer );

// facebook auth.
r.post('/facebook', continue_facebook, validate, facebook );

module.exports = r;