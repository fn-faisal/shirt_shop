const r = require('express')();
const { protectByToken } = require('../shared.validation');
const { cart_add_validation, update_cart_validation, remove_cart_item_validation } = require('./cart.validation');
const { validate } = require('../../utils');

// service.
const { generateUniqueId, addToCart, getCart, updateCartItem, clearCart, removeItem } = require('./cart.service');

// generate cart id.
r.get('/generateUniqueId', protectByToken, validate, generateUniqueId );

// add item to cart.
r.post('/add', protectByToken, validate, cart_add_validation, validate, addToCart );

// get cart.
r.get('/:cart_id', protectByToken, validate, getCart );

// update cart item.
r.put('/update/:item_id', protectByToken, update_cart_validation, validate, updateCartItem);

// clear the cart
r.delete('/empty/:cart_id', protectByToken, validate, clearCart );

// remove a product from cart.
r.delete('/removeProduct/:item_id', protectByToken, remove_cart_item_validation, validate, removeItem )

module.exports = r; 