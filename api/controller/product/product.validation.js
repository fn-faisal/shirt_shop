const { sanitizeQuery } = require('express-validator');

module.exports.get_all_products_validation = [
    sanitizeQuery('page').toInt(),
    sanitizeQuery('limit').toInt(),
    sanitizeQuery('description_length').toInt()
];