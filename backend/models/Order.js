/*
Order Model to record items actually purchased
 Note:
 Cart vs. Order:
Cart: Temporary storage for products a user wants to buy.
Order: Permanent record of a completed purchase.
 */


const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Order = sequelize.define('Order', {
  total: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM('pending', 'processing', 'shipped', 'delivered', 'cancelled'),
    defaultValue: 'pending',
  },
  paymentId: {
    type: DataTypes.STRING, // Store Paystack transaction reference
  },
});

module.exports = Order;