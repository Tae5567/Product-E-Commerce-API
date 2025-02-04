/*
Cart Model to hold items that user adds to cart
 Note:
 Cart vs. Order:
Cart: Temporary storage for products a user wants to buy.
Order: Permanent record of a completed purchase.
 */


const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Cart = sequelize.define('Cart', {
  quantity: {
    type: DataTypes.INTEGER,
    defaultValue: 1,
    validate: { min: 1 },
  },
});

module.exports = Cart;

