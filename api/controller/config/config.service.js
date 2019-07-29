// attributes.
const { Attribute, AttributeValue, Product, Department, Category, ShippingRegion } = require('../../model/schema');

const sequelize = require('sequelize');

module.exports.getConfig = async ( req, res ) => {
    try {
        // fetch colors.
        // attribute id for color.
        let { attribute_id : color_attribute_id } = await Attribute.findOne({ where: { name: 'Color' }, attributes: [ 'attribute_id' ] });
        // the list of color.
        let colors = await AttributeValue.findAll({ where: { attribute_id: color_attribute_id }, attributes: [ 'attribute_value_id', 'value' ] })
        
        // fetch sizes. 
        // attribute id for color.
        let { attribute_id: sizes_attribute_id } = await Attribute.findOne({ where: { name: 'Size' }, attributes: [ 'attribute_id' ] });
        // the list of color.
        let sizes = await AttributeValue.findAll({ where: { attribute_id: sizes_attribute_id }, attributes: [ 'attribute_value_id', 'value' ] });
        
        // the maximum price.
        let { price: max_value } = await Product.findOne({ attributes: [ [sequelize.fn('MAX', sequelize.col('price') ), 'price'] ] });

        // the departments.
        let departments = await Department.findAll(); 

        // categories.
        let categories = await Category.findAll();

        // shipping regions.
        let shipping_regions = await ShippingRegion.findAll();

        return res.json({
            max_value: parseFloat(max_value),
            colors,
            sizes,
            departments,
            categories,
            shipping_regions
        })

    } catch( e ) {
        console.error(e);
        return res.json({ code: 'SRV_01', message: 'Server error' })
    }
    
}