const { serverErrorCodes: { misc } } = require('../../utils');
const { Product, Orders, OrderDetail, ShoppingCart, Tax, ShippingRegion, Shipping } = require('../../model/schema');

const random = require('crypto-random-string');

module.exports.placeOrder = async (req, res) => {
    try {
        let { cart_id, shipping_id } = req.body;
        // cart items.
        let cartItems = await ShoppingCart.findAll({ where: { cart_id } });

        // let total.
        let total = 0;
        cartItems.map( async(item) => {
            // get the product.
            let product = await Product.findOne({ where: { product_id: item.product_id } });
            let price = ((product.discounted_price == 0.00 ? parseFloat(product.price) : parseFloat (product.discounted_price)) * parseInt (item.quantity));
            total += price;
        });

        // add sales tax to total.
        let tax = await Tax.findOne({ where: { tax_id : 1 } });
        total += total * ( parseInt(tax.tax_percentage) / 100 );

        // add shipping cost.
        let shipping = await Shipping.findOne({ where: { shipping_id } });
        total += parseFloat(shipping.shipping_cost);

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

        cartItems.map( async (item) => {
            // get the product.
            let product = await Product.findOne({ where: { product_id: item.product_id } });
            let price = (product.discounted_price == 0.00 ? parseFloat(product.price) : parseFloat (product.discounted_price));
            await OrderDetail.create({ order_id: order.order_id, product_id: product.product_id, attributes: item.attributes, product_name: product.name, quantity: item.quantity, unit_cost: price });
        })

        return res.json({ order_id: order.order_id })

    } catch( e ) {
        console.error(e);
        return res.json( misc() );
    }
}