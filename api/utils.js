const { validationResult } = require('express-validator');

module.exports.validate = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
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