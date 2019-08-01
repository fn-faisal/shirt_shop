const r = require('express')();

// the method.
const { validate } = require('../../utils');

// service.
const { getAllProducts, getProductById, searchProducts } = require('./product.service');

// validation.
const { get_all_products_validation, search_product_validation } = require('./product.validation');

// get all products.
r.get( '/', get_all_products_validation, validate, getAllProducts );

// search products.
r.get('/search', search_product_validation, validate, searchProducts );

// get product.
r.get('/:product_id', getProductById );

module.exports = r;