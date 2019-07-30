const { serverErrorCodes: { misc } } = require('../../utils');
const { Orders, OrderDetail, ShoppingCart, Tax, ShippingRegion, Shipping } = require('../../model/schema');

const random = require('crypto-random-string');

module.exports.placeOrder = async (req, res) => {
    try {
        let { cart_id, shipping_region_id } = req.body;
        // cart items.
        let cartItems = await ShoppingCart.findAll({ where: { cart_id } });

        // let total.
        let total = 0;
        cartItems.map( item => total += ((item.discounted_price == 0.00 ? item.price : item.discounted_price) * item.quantity) )

        // add sales tax to total.
        let tax = await Tax.findOne({ where: { tax_id : 1 } });
        total += total * ( tax.tax_percentage / 100 );

        // add shipping cost.
        let shipping = await Shipping.findOne({ where: { shipping_region_id: shipping_region_id } });
        total += shipping.shipping_cost;

        let reference = random({ length: 7, characters: 'abcdefghijklmnopqrstuvwxyz0123456789' });
        
        // save the order.
        let order = await Orders.create({
            total_amount: total,
            tax_id: tax.tax_id,
            created_on: Date.now(),
            status: 'processing_payment',
            customer_id: req.customer.customer_id,
            reference: reference,
            shipping_id: shipping.shipping_id,
            tax: tax.tax_id
        });

        return res.json({ order_id: order.order_id })

    } catch( e ) {
        console.error(e);
        return res.json( misc() );
    }
}