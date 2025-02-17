/*
Order Model to record items actually purchased
 Note:
 Cart vs. Order:
Cart: Temporary storage for products a user wants to buy.
Order: Permanent record of a completed purchase.
 */


import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

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

export default Order;