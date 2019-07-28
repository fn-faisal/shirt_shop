const router = require('express')();

//-------------------------------------------
// Configs.
//-------------------------------------------

const Config = require('../api/controller/config/config.route');
router.use( '/config', Config );

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

//-------------------------------------------
// Cart.
//-------------------------------------------

const Cart = require('../api/controller/cart/cart.route');
router.use( '/shoppingcart', Cart );

module.exports = router;
