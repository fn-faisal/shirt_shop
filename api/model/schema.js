const Sequelize = require('sequelize');
const { Model, STRING, INTEGER, TEXT, literal, ENUM, DECIMAL, SMALLINT } = Sequelize;

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'mysql'
});

const connect = async () => {
    try {
        await sequelize.authenticate();
        console.log('connected to database');
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
    Attribute: 'attribute',
    AttributeValue: 'attribute_value'
}

class Customer extends Model {}
class CustomerSession extends Model {}
class Product extends Model {}
class Attribute extends Model {}
class AttributeValue extends Model {}

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