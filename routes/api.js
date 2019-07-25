const router = require('express')();

//-------------------------------------------
// Customer.
//-------------------------------------------

const Customer = require('../api/controller/customer/customer.route');
const Customers = require('../api/controller/customers/customers.route');
router.use( '/customer', Customer );
router.use( '/customers', Customers );

//-------------------------------------------
// Product
//-------------------------------------------

const Product = require('../api/controller/product/product.route');
router.use( '/products', Product );

module.exports = router;
