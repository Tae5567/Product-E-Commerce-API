import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const Product = sequelize.define('Product', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  stock: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  imageUrl: {
    type: DataTypes.STRING,
  },
  category: {  // Main category
    type: DataTypes.STRING,
    defaultValue: 'Shoes',
    allowNull: false
  },
  subcategory: {  // Shoe types
    type: DataTypes.ENUM('Sandals', 'Pumps', 'Mules', 'Flats', 'Boots'),
    allowNull: false
  },
  material: {
    type: DataTypes.STRING,
    defaultValue: 'Leather'
  }
});

export default Product;