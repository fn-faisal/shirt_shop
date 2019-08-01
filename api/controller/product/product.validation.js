const { sanitizeQuery, check } = require('express-validator');
const { productErrorCodes: { empty } } = require('../../utils');

module.exports.get_all_products_validation = [
    sanitizeQuery('page').toInt(),
    sanitizeQuery('limit').toInt(),
    sanitizeQuery('description_length').toInt()
];

module.exports.search_product_validation = [
    check('query_string').not().isEmpty().withMessage(empty('query_string')),
    sanitizeQuery('page').toInt(),
    sanitizeQuery('limit').toInt(),
    sanitizeQuery('description_length').toInt()
];