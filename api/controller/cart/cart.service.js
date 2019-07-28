const cryptoRandomString = require('crypto-random-string');
const { serverErrorCodes: { misc }, cartErrorCodes: { notfound } } = require('../../utils');
const { ShoppingCart } = require('../../model/schema');

const { QueryInterface } = require('sequelize');

module.exports.generateUniqueId = async ( req, res ) => {
    let cart_id = cryptoRandomString({ length: 32, type: 'url-safe' });
    // save token in session for validation. MAX AGE can be updated from env
    req.session.cart_id = cart_id;
    res.json({ cart_id });
}

module.exports.addToCart = async ( req, res ) => {
    //res.json({ add: 'cart' })
    try {
        let quantity = req.body.quantity || 1;
        let price = req.product.discounted_price == 0.00 ? req.product.price : req.product.discounted_price;
        price *= quantity;
        await ShoppingCart.create({ cart_id: req.body.cart_id, product_id: req.body.product_id, attributes: req.body.attributes, quantity: quantity });
        let shoppingCart = await ShoppingCart.findOne({ where: { cart_id: req.body.cart_id, product_id: req.body.product_id, attributes: req.body.attributes, quantity: req.body.quantity } });
        return res.json([{...shoppingCart.toJSON(), price}]);
    } catch( e ) {
        console.error(e);
        return res.json(misc);
    }
}

module.exports.getCart = async ( req, res ) => {
    try {
        let cart = await ShoppingCart.findAll({ where: { cart_id: req.params.cart_id } });
        return res.json(cart);
    } catch ( e ) {
        console.error(e);
        return res.json(misc);
    }
}

module.exports.updateCartItem = async ( req, res ) => {
    try {
        let cartItem = await ShoppingCart.findOne({ where: { item_id: req.params.item_id } })
        if ( cartItem ) {
            await cartItem.update({ quantity: req.body.quantity });
            return res.json([cartItem]);
        }
        return res.json( notfound('cart-item') );
    } catch( e ) {
        console.error(e);
        return res.json(misc);
    }
}

module.exports.clearCart = async ( req, res ) => {
    try {
        let cart = await ShoppingCart.findAll({ where: { cart_id: req.params.cart_id } })
        cart.map( c => c.destroy() );
        return res.json([]);
    } catch ( e ) {
        console.error(e);
        return res.json(misc);
    }
}

module.exports.removeItem = async ( req, res ) => {
    try {
        let cartItem = await ShoppingCart.findOne({ where: { item_id: req.params.item_id } });
        cartItem.destroy();
        return res.json();
    } catch ( e ) {
        console.error(e);
        return res.json(misc);
    }
}