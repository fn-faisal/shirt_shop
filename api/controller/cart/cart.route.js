const r = require('express')();
const { protectByToken } = require('../shared.validation');
const { cart_add_validation } = require('./cart.validation');
const { validate } = require('../../utils');

// service.
const { generateUniqueId, addToCart } = require('./cart.service');

// generate cart id.
r.get('/generateUniqueId', protectByToken, validate, generateUniqueId );

// add item to cart.
r.post('/add', protectByToken, validate, cart_add_validation, validate, addToCart );

module.exports = r; 