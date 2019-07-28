const { check } = require('express-validator');
const { cartErrorCodes: { empty, invalidId }, productErrorCodes: { notfound }, serverErrorCodes: { misc } } = require('../../utils');
const { Product } = require('../../model/schema');

module.exports.cart_add_validation = [
    check('cart_id').not().isEmpty().withMessage(empty('cart_id')),
        // .custom( (cart_id, {req}) => 
        //     new Promise( 
        //         (resolve, reject) => 
        //         cart_id === req.session.cart_id ? resolve() : reject( invalidId() ) ) ),
    check('product_id').not().isEmpty().withMessage(empty('product_id')).trim().escape().toInt()
        .custom( (product_id, {req}) => 
            new Promise( (resolve, reject) => 
                Product.findOne({ where: { product_id: product_id } })
                .then( product => {
                    req.product = product;
                    return product ? resolve() : reject(notfound('product'));   
                } ).catch( err => { console.error(err); reject(misc()) } ) ) ),
    check('attributes').not().isEmpty().withMessage( empty('attributes') ).trim().escape()
];