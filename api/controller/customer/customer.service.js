const { serverErrorCodes: { misc }, cartErrorCodes: { notfound } } = require('../../utils');
const { Customer } = require('../../model/schema');

module.exports.updateCustomer = async ( req, res ) => {
    try {
        await req.customer.update( req.body );
        return res.json(req.customer);
    } catch( e ) {
        console.error(e)
        return res.json(misc());
    }
}
