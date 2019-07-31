const r = require('express')();
const { validate } = require('../../utils');
const { protectByToken } = require('../shared.validation');
const { validate_charge, create_token_validation } = require('./stripe.validation');

const { chargeCustomer, generateToken } = require('./stripe.service');

// charge client.
r.post('/', protectByToken, validate_charge, validate, chargeCustomer );

// generate token
r.post('/token', protectByToken, create_token_validation, validate, generateToken );

module.exports = r;
