const { check } = require('express-validator');
const { authErrorCodes: { emptyToken, notAllowed } } = require('../utils');
const { Customer, CustomerSession } = require('../model/schema');

module.exports.protectByToken = [
    check('Authorization').not().isEmpty().withMessage(emptyToken())
    .custom( token => new Promise( (resolve, reject) => {
        CustomerSession.findOne({ where: { session_token: token.replace('Bearer ', '') } })
            .then ( session => session ? resolve() : reject(notAllowed()) )
            .catch( err => { console.error(err); reject(notAllowed()) } )
        })
    )
] 
