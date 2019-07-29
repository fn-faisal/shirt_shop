const r = require('express')();

const { protectAndLoadCustomer } = require('../shared.validation');
const { update_customer_validation } = require('./customer.validation');
const { validate } = require('../../utils');

const { updateCustomer } = require('./customer.service');

r.get('/', (req, res) => res.send('Customer route'));

// update customer.
r.put('/', protectAndLoadCustomer, update_customer_validation, validate, updateCustomer);

module.exports = r;