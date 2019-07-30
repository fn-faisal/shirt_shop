const r = require('express')();

const { validate } = require('../../utils');
const { protectAndLoadCustomer } = require('../shared.validation');
const { place_order_validation } = require('./order.validation');

const { placeOrder } = require('./order.service');

// create order.
r.post('/', protectAndLoadCustomer, place_order_validation, validate, placeOrder);

module.exports = r;