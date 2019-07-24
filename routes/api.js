const router = require('express')();

//-------------------------------------------
// Customer.
//-------------------------------------------

const Customer = require('../api/controller/customer/customer.route');
const Customers = require('../api/controller/customers/customers.route');
router.use( '/customer', Customer );
router.use( '/customers', Customers );


//router.get('/', (req, res) => res.send('Hello web'));

module.exports = router;
