const jwt = require('jsonwebtoken');
const { Customer, CustomerSession } = require('../../model/schema');

module.exports.registerCustomer = async (req, res) => {
    try {
        // create the customer.
        await Customer.create(req.body);
        let customer = await Customer.findOne({ where: req.body });
        return loginCustomer( req, res );
    }
    catch ( e ) {
        console.error(e);
        //switch( errors.p )
        res.json({ code: 'SRV_01', message: 'Server error' });
    }
}

const loginCustomer = async ( req, res ) => {
    try {
        let { email, password } = req.body;
        let customer = await Customer.findOne({ where: { email, password } });
        let tokenExpiry = process.env.TOKEN_DEFAULT_EXPIRY || (60 * 60 * 24);
        let accessToken = jwt.sign({ customer_id: customer.customer_id }, process.env.TOKEN_KEY || 'test', { expiresIn: process.env.TOKEN_DEFAULT_EXPIRY || (60 * 60 * 24) });

        // store the session.
        let status = await CustomerSession.create({ customer_id: customer.customer_id, session_token: accessToken, expires_in: tokenExpiry });
        
        return res.json({ customer: {schema : customer}, accessToken: `Bearer ${accessToken}`, expiresIn: `${(tokenExpiry / (60 * 60))}h` });
    }
    catch ( e ) {
        console.error(e);
        res.json({ error: 'Server error' });
    }
}

module.exports.loginCustomer = loginCustomer;