const r = require('express')();

// the method.
const { validate } = require('../../utils');

// service.
const { getAllProducts } = require('./product.service');

// validation.
const { get_all_products_validation } = require('./product.validation');

// the get all products.
r.get( '/', get_all_products_validation, validate, getAllProducts );

module.exports = r;