const sequelize, { Model, STRING, INTEGER, TEXT } = require('sequelize');

const model = {
    Customer: 'customer'
}

class Customer extends Model {}

module.exports.Customer = Customer.init({
    customer_id: { type: INTEGER, allowNull: false, primaryKey: true },
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
}, { sequelize, modelName: model.Customer });