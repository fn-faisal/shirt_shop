const r = require('express')();

const { registerCustomer } = require('./customers.service');
const { register_customer_validation } = require('./customers.validation');
const { validate } = require('../../utils');

// register a customer.
r.post( '/', register_customer_validation, validate, registerCustomer );

module.exports = r;