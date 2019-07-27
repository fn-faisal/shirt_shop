const sequelize = require('sequelize');
// products model.
const { Product, Attribute, AttributeValue, Category, ProductAttribute, ProductCategory, Department } = require('../../model/schema'); 

// get all products.
module.exports.getAllProducts = async (req, res) => {
    //return res.json(await ProductCategory.findAll({ attributes: [ 'product_id' ] }));
    // page.
    let page = req.query.page || 1;
    // limit.
    let limit = req.query.limit || 20;
    // description length.
    let descriptionLength = req.query.description_length || 200;
    
    // filter.
    let filter = req.query.filter || '';
    // the query string to be used in the where clause.
    let whereColor = {};
    let whereSize = {};
    let whereCategory = {};
    let whereDept = {};
    if ( filter !== '' ) {
        let filterOptions = filter.split(';');
        // filter color
        let filterColorOptions = filterOptions.filter( fop => fop.startsWith('color_id') );
        if ( filterColorOptions.length > 0 ) {
            let colorFilter = filterColorOptions.pop().split('=').pop();
            whereColor = { 
                'product_id' : { [sequelize.Op.in] : sequelize.literal(`(SELECT product_id FROM product_attribute WHERE attribute_value_id = ${colorFilter})`) } 
            }
        }
        // filter size
        let filterSizeOptions = filterOptions.filter( fop => fop.startsWith('size_id') );
        if ( filterSizeOptions.length > 0 ) {
            let sizeFilter = filterSizeOptions.pop().split('=').pop();
            whereSize = { 
                'product_id' : { [sequelize.Op.in] : sequelize.literal(`(SELECT product_id FROM product_attribute WHERE attribute_value_id = ${sizeFilter})`) } 
             }
        }
        // filter category.
        let filterCategoryOptions = filterOptions.filter( fop => fop.startsWith('category_id') );
        if ( filterCategoryOptions.length > 0 ) {
            let categoryFilter = filterCategoryOptions.pop().split('=').pop();
            whereCategory = { 
                'product_id' : { [sequelize.Op.in] : sequelize.literal(`(SELECT product_id FROM product_category WHERE category_id = ${categoryFilter})`) } 
            }
        }
        // filter department.
        let filterDeptOptions = filterOptions.filter( fop => fop.startsWith('department_ids') );
        if ( filterDeptOptions.length > 0 ) {
            let deptFilter = filterDeptOptions.pop().split('=').pop();
            whereDept = {
                'product_id' : { [sequelize.Op.in] : sequelize.literal(`( SELECT product_id FROM product_category WHERE category_id IN ( SELECT category_id FROM category WHERE department_id IN (${deptFilter}) ) )`) } 
            }
        }
    }
    // response with product.
    let query = [];
    if ( Object.keys(whereColor).length > 0 )
        query.push( { 'product_id': whereColor } );
    if ( Object.keys(whereSize).length > 0 )
        query.push( { 'product_id': whereSize } );
    if ( Object.keys(whereCategory).length > 0 )
        query.push( { 'product_id': whereCategory } );
    if ( Object.keys(whereDept).length > 0 )
        query.push( { 'product_id': whereDept} );
    try {
        // products.
        let products = await Product.findAll({ 
            attributes: [ 'product_id', 'name', 'price', 'discounted_price', 'thumbnail', [sequelize.fn('SUBSTRING', sequelize.col('description'), 1, descriptionLength), 'description'], 'image' ], 
            offset: ((page - 1) * limit), limit: limit,
            where: { 
                [sequelize.Op.and]: 
                [
                    whereColor, whereSize, whereCategory, whereDept
                ]
            }
        });
        return res.json({ count: products.length, rows: products });
    } catch ( e ) {
        console.error(e);
        return res.status(500).json({ code: 'SRV_01', message: 'Server error' });
    }
}

module.exports.getProductById = async ( req, res ) => {
    try {
        let product = await Product.findOne({ where: { product_id: req.params.product_id}});
        if ( req.query.with_meta === 'true' ) {
            product = product.toJSON();
            // colors.
            let colorsAttrId = await Attribute.findOne({ where: { name: 'Color' } });
            let colorAttributes = await AttributeValue.findAll({ where: { attribute_id: colorsAttrId.attribute_id } })
            let colorAttrValIds = colorAttributes.map( cAt => cAt.attribute_value_id );
            let productColorAttributes = colorAttributes.filter( attr => colorAttrValIds.includes(attr.attribute_value_id));
            product.colors = productColorAttributes;

            // sizes.
            let sizesAttrId = await Attribute.findOne({ where: { name: 'Size' } });
            let sizeAttributes = await AttributeValue.findAll({ where: { attribute_id: sizesAttrId.attribute_id } })
            let sizeAttrValIds = sizeAttributes.map( cAt => cAt.attribute_value_id );
            let productSizeAttributes = sizeAttributes.filter( attr => sizeAttrValIds.includes(attr.attribute_value_id));
            product.sizes = productSizeAttributes;

            // category.
            let productCategory = await ProductCategory.findOne({ attributes: [ 'category_id', 'product_id' ], where: { product_id: req.params.product_id } });
            let category = await Category.findOne({ where: { category_id: productCategory.category_id } });
            // category department.
            let department = await Department.findOne({ where: { department_id: category.department_id } });
            category.department = department;
            product.category = category;

        }
        return res.json(product);
    }
    catch ( e ) {
        console.error(e);
        return res.status(500).json({ code: 'SRV_01', message: 'Server error' });
    }
}
