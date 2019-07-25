const jwt = require('jsonwebtoken');
const { Customer, CustomerSession } = require('../../model/schema');
const fbGraphs = require('fbgraph');

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
        let { email, password, type } = req.body;
        if ( !type ) type = 'email';
        console.log(type);
        let customer = await Customer.findOne({ where: { email, password } });
        let tokenExpiry = process.env.TOKEN_DEFAULT_EXPIRY || (60 * 60 * 24);
        let accessToken = jwt.sign({ customer_id: customer.customer_id }, process.env.TOKEN_KEY || 'test', { expiresIn: process.env.TOKEN_DEFAULT_EXPIRY || (60 * 60 * 24) });
        // store the session.
        let status = await CustomerSession.create({ customer_id: customer.customer_id, session_token: accessToken, expires_in: tokenExpiry, type: type });
        
        return res.json({ customer: {schema : customer}, accessToken: `Bearer ${accessToken}`, expiresIn: `${(tokenExpiry / (60 * 60))}h` });
    }
    catch ( e ) {
        console.error(e);
        res.json({ error: 'Server error' });
    }
}

module.exports.loginCustomer = loginCustomer;

module.exports.facebook = async (req, res) => {
    fbGraphs.setAccessToken(req.body.access_token);
    fbGraphs.get('/me?fields=name,email',
        async (err, data) => {
            if ( err ) {
                console.error(err);
                if ( err.code === 190 )
                    return res.status(400).json(err);
                else
                    res.status(500).json({ code: 'SRV_01', message: 'Server error' })
            } else {
                let { name, email } = data;
                // save the customer.
                let customer = await Customer.findOrCreate({ where: { email }, defaults:{ name, email, password: 'facebook' } })
                // login the customer.
                return await loginCustomer( { ...req, body: { ...req.body, email, password: 'facebook',  type: 'facebook' } }, res );
            }
        });


    //res.json({ accessToken: req.body.access_token, fb });
}