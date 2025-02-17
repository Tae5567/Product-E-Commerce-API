/*
Cart Model to hold items that user adds to cart
 Note:
 Cart vs. Order:
Cart: Temporary storage for products a user wants to buy.
Order: Permanent record of a completed purchase.
 */


import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const Cart = sequelize.define('Cart', {
  quantity: {
    type: DataTypes.INTEGER,
    defaultValue: 1,
    validate: { min: 1 },
  },
});

 export default Cart;