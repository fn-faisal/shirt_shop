const { validationResult } = require('express-validator');

module.exports.validate = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.log(JSON.stringify(errors.errors[0].msg));
        let { msg: { code, message }, param } = errors.errors[0];
        return res.status(400).json({ 
            code: code,
            message: message,
            field: param,
            status: 400
        });
    }
    next();
}

module.exports.userErrorCodes = {
    empty : (field) => { return { code: 'USR_02', message: `The field ${field} is required` } },
    invalid: (field) => { return { code: 'USR_03', message: `The ${field} is invalid` } },
    lengthGt : (field, len) => { return { code: 'USR_07', message: `This is too long <${field}> [max: ${len}]` } },
    unique: ( field ) => { return { code: 'USR_04', message: `The ${field} already exists` } },
    notfound: ( field ) => { return { code: 'USR_05', message: `The ${field} doesn't exist.` } }
}

module.exports.productErrorCodes = {
    notfound: ( field ) => { return { code: 'PRD_01', message: `The ${field} doesn't exist.` } }
}

module.exports.queryErrorCodes = {
    type: ( field, type ) => { return { code: 'QRY_01', message: `The query parameter ${field} must be of type ${type}` } },
}

module.exports.authErrorCodes = {
    emptyToken : (  ) => { return { code: 'AUT_01', message: `Authorization code is empty` } },
    notAllowed : () => { return { code: 'AUT_02', message: `Access Unauthorized`, code: 401 } }
}

module.exports.cartErrorCodes = {
    empty : (field) => { return { code: 'CRT_01', message: `The field ${field} is required` } },
    invalidId: () => { return { code: 'CRT_02', message: 'The cart id is invalid' } },
    notfound: ( field ) => { return { code: 'CRT_03', message: `The ${field} doesn't exist.` } }
}

module.exports.serverErrorCodes = {
    misc: () => { return { code: 'SRV_01', message: 'An error occured!' } }
}