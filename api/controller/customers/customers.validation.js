const { check } = require('express-validator');
const { userErrorCodes: { empty, invalid, lengthGt, unique, notfound } } = require('../../utils');
const { Customer } = require('../../model/schema');

const customerEmailCheck = async (email) => {
    try {
        let customer = await Customer.findOne({ where: { email } });
        if ( customer ) {
            return Promise.reject(unique('email'));
        }
    } catch ( e ) {
        console.error(e);
        return Promise.reject({ code: 'MISC_01', message: 'An unknown error occurred' })
    }
}

const customerExistsCheck = async ( email ) => {
    try {
        let customer = await Customer.findOne({ where: { email } });
        if ( !customer ) {
            return Promise.reject(notfound('email'));
        }
    } catch ( e ) {
        console.error(e);
        return Promise.reject({ code: 'MISC_01', message: 'An unknown error occurred' })
    }
}

module.exports.register_customer_validation = [
    check('name').not().isEmpty().withMessage(empty('name')).trim().escape(),
    check('email').not().isEmpty().withMessage(empty('email')).isEmail().withMessage(invalid('email')).trim().escape().custom( async (val) => customerEmailCheck(val) ),
    check('password').not().isEmpty().withMessage(empty('password')).trim().escape().isLength({ max: 50 }).withMessage(lengthGt('password', 50))
];

module.exports.login_customer_validation = [
    check('email').not().isEmpty().withMessage(empty('email')).isEmail().withMessage(invalid('email')).trim().escape().custom( async (val) => customerExistsCheck(val) ),
    check('password').not().isEmpty().withMessage(empty('password')).trim().escape().isLength({ max: 50 }).withMessage(lengthGt('password', 50))
];