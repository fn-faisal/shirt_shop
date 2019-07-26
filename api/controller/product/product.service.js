const sequelize = require('sequelize');
// products model.
const { Product, Attribute, AttributeValue, ProductAttribute } = require('../../model/schema'); 

// get all products.
module.exports.getAllProducts = async (req, res) => {
    // page.
    let page = req.query.page || 1;
    // limit.
    let limit = req.query.limit || 20;
    // description length.
    let descriptionLength = req.query.description_length || 200;
    // response with product.
    try {
        // products.
        let products = await Product.findAll({ attributes: [ 'product_id', 'name', 'price', 'discounted_price', 'thumbnail', [sequelize.fn('SUBSTRING', sequelize.col('description'), 1, descriptionLength), 'description'], 'image' ], offset: (page * limit), limit: limit });
        return res.json({ count: products.length, rows: products });
    } catch ( e ) {
        console.error(e);
        return res.status(500).json({ code: 'SRV_01', message: 'Server error' });
    }
}