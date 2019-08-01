const Sequelize = require('sequelize');
const { Model, DATE, STRING, INTEGER, TEXT, TINYINT, literal, ENUM, DECIMAL, SMALLINT, CHAR } = Sequelize;

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'mysql'
});

const connect = async () => {
    try {
        await sequelize.authenticate();
        console.log('connected to database');
        await sequelize.sync();
    }
    catch ( e ) {
        console.error(e);
    }
}

connect();

const model = {
    Customer: 'customer',
    CustomerSession: 'customer_session',
    Prodcut: 'product',
    ProductAttribute: 'product_attribute',
    ProductCategory: 'product_category',
    Attribute: 'attribute',
    AttributeValue: 'attribute_value',
    Department: 'department',
    Category: 'category',
    ShoppingCart: 'shopping_cart',
    ShippingRegion: 'shipping_region',
    Shipping: 'shipping',
    Orders : 'orders',
    OrderDetails: 'order_detail',
    Tax: 'tax'
}

class Customer extends Model {}
class CustomerSession extends Model {}
class Product extends Model {}
class ProductAttribute extends Model {}
class ProductCategory extends Model {}
class Attribute extends Model {}
class AttributeValue extends Model {}
class Department extends Model {}
class Category extends Model {}
class ShoppingCart extends Model {}
class ShippingRegion extends Model {}
class Shipping extends Model {}
class Orders extends Model {}
class OrderDetail extends Model {}
class Tax extends Model {}

module.exports.Customer = Customer.init({
    customer_id: { type: INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: STRING, allowNull: false },
    email: { type: STRING, allowNull: false },
    password: { type: STRING, allowNull: false },
    credit_card: { type: TEXT },
    address_1: { type: STRING },
    address_2: { type: STRING },
    city: { type: STRING },
    region: { type: STRING },
    postal_code: { type: STRING },
    country: { type: STRING },
    day_phone: { type: STRING },
    eve_phone: { type: STRING },
    shipping_region_id: { type: INTEGER }
}, { sequelize, freezeTableName: true, modelName: model.Customer, timestamps: false });

module.exports.CustomerSession = CustomerSession.init({
    session_id: { type: INTEGER, autoIncrement: true, primaryKey: true },
    customer_id: { type: INTEGER, allowNull: false },
    session_token: { type: TEXT, allowNull: false },
    type: { type: ENUM('email', 'facebook'), defaultValue: 'email' },
    expires_in: { type: STRING },
    created_at: { type: 'TIMESTAMP', defaultValue: literal('CURRENT_TIMESTAMP'), allowNull: false }
}, { sequelize, freezeTableName: true, modelName: model.CustomerSession, timestamps: false });

module.exports.Product = Product.init({
    product_id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: STRING , allowNull: false },
    description: { type: STRING, allowNull: false },
    price: { type: DECIMAL, allowNull: false },
    discounted_price: { type: DECIMAL, allowNull: false, defaultValue: 0.00 },
    image: { type: STRING },
    image_2: { type: STRING },
    thumbnail: { type: STRING },
    display: { type: SMALLINT }
}, { sequelize, freezeTableName: true, modelName: model.Product, timestamps: false });

module.exports.Attribute = Attribute.init({
    attribute_id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: STRING, allowNull: false }
}, { sequelize, freezeTableName: true, modelName: model.Attribute, timestamps: false })

module.exports.AttributeValue = AttributeValue.init({
    attribute_value_id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    attribute_id: { type: INTEGER, allowNull: false },
    value: { type: STRING, allowNull: false }
}, { sequelize, freezeTableName: true, modelName: model.AttributeValue, timestamps: false })



module.exports.Department = Department.init({
    department_id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: STRING, allowNull: false },
    description: { type: STRING } 
}, { sequelize, freezeTableName: true, modelName: model.Department, timestamps: false }); 

module.exports.Category = Category.init({
    category_id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    department_id: { type: INTEGER, allowNull: false },
    name: { type: STRING, allowNull: false },
    description: { type: STRING }
}, { sequelize, freezeTableName: true, modelName: model.Category, timestamps: false })

module.exports.ProductAttribute = ProductAttribute.init({
    product_id : { type: INTEGER, allowNull: false },
    attribute_value_id: { type: INTEGER, allowNull: false },
}, { sequelize, freezeTableName: true, modelName: model.ProductAttribute, timestamps: false })

module.exports.ProductCategory = ProductCategory.init({
    product_id : { type: INTEGER, allowNull: false },
    category_id: { type: INTEGER, allowNull: false },
}, { sequelize, freezeTableName: true, modelName: model.ProductCategory, timestamps: false });

module.exports.ShoppingCart = ShoppingCart.init({
    item_id : { type: INTEGER, autoIncrement: true, primaryKey: true },
    cart_id: { type: CHAR(32), allowNull: false },
    product_id: { type: INTEGER(11), allowNull: false },
    attributes: { type: STRING(1000), allowNull: false },
    quantity: { type: INTEGER, allowNull: false },
    buy_now: { type: TINYINT(1), allowNull: false, defaultValue: 1 },
    added_on: { type: DATE, allowNull: false, defaultValue: Date.now() }
}, { sequelize, freezeTableName: true, modelName: model.ShoppingCart, timestamps: false });

module.exports.ShippingRegion = ShippingRegion.init({
    shipping_region_id: { type: INTEGER, autoIncrement: true, primaryKey: true },
    shipping_region : { type: STRING, allowNull: false }
}, { sequelize, freezeTableName: true, modelName: model.ShippingRegion, timestamps: false });

module.exports.Orders = Orders.init({
    order_id: { type: INTEGER, autoIncrement: true, primaryKey: true },
    total_amount: { type: DECIMAL(10, 2), allowNull: false },
    created_on: { type: DATE, allowNull: false },
    shipped_on: { type: DATE },
    comments: { type: STRING(255) },
    customer_id: { type: INTEGER, allowNull: false },
    auth_code: { type: STRING(50) },
    reference: { type: STRING(50) },
    shipping_id: { type: INTEGER },
    tax_id: { type: INTEGER }
}, { sequelize, freezeTableName: true, modelName: model.Orders, timestamps: false });

module.exports.OrderDetail = OrderDetail.init({
    item_id: { type: INTEGER, autoIncrement: true, primaryKey: true },
    order_id: { type: INTEGER, allowNull: false },
    product_id: { type: INTEGER, allowNull: false },
    attributes: { type: STRING, allowNull: false },
    product_name: { type: STRING, allowNull: false },
    quantity: { type: INTEGER, allowNull: false },
    unit_cost: { type: DECIMAL(10, 2), allowNull: false }
}, { sequelize, freezeTableName: true, modelName: model.OrderDetails, timestamps: false });

module.exports.Tax = Tax.init({
    tax_id: { type: INTEGER, primaryKey: true, autoIncrement: false },
    tax_type: { type: STRING(100), allowNull: false },
    tax_percentage: { type: DECIMAL(10, 2), allowNull: false }
}, { sequelize, freezeTableName: true, modelName: model.Tax, timestamps: false });

module.exports.Shipping = Shipping.init({
    shipping_id: { type: INTEGER, primaryKey: true, autoIncrement: false },
    shipping_type: { type: STRING(100), allowNull: false },
    shipping_cost: { type: DECIMAL(10, 2), allowNull: false },
    shipping_region_id: { type: INTEGER, allowNull: false }
}, { sequelize, freezeTableName: true, modelName: model.Shipping, timestamps: false });
