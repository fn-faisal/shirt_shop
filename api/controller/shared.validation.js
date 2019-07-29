const { check } = require('express-validator');
const { authErrorCodes: { emptyToken, notAllowed }, serverErrorCodes: { misc } } = require('../utils');
const { Customer, CustomerSession } = require('../model/schema');

module.exports.protectByToken = [
    check('Authorization').not().isEmpty().withMessage(emptyToken())
    .custom( token => new Promise( (resolve, reject) => {
        CustomerSession.findOne({ where: { session_token: token.replace('Bearer ', '') } })
            .then ( session => session ? resolve() : reject(notAllowed()) )
            .catch( err => { console.error(err); reject(notAllowed()) } )
        })
    )
];

module.exports.protectAndLoadCustomer = [
    check('Authorization').not().isEmpty().withMessage(emptyToken())
    .custom( (token, {req}) => new Promise( (resolve, reject) => {
        CustomerSession.findOne({ where: { session_token: token.replace('Bearer ', '') } })
            .then ( (session) => {
                return Customer.findOne({ where: { customer_id: session.customer_id } })
                .then ( customer => {
                    req.customer = customer;
                    return session ? resolve() : reject(notAllowed());
                })
                .catch( err => { console.error(err); reject(misc())} )
            })
            .catch( err => { console.error(err); reject(misc()) } )
        })
    )
];