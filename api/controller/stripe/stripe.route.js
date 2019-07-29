const r = require('express')();
const { validate } = require('../../utils');
const { protectByToken } = require('../shared.validation');
const { validate_charge } = require('./stripe.validation');

const { chargeCustomer } = require('./stripe.service');

// charge client.
r.post('/', protectByToken, validate_charge, validate, chargeCustomer);

module.exports = r;
