import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();

export const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'postgres'
});


//Test database connection
const testConnection = async () => {
    try{
        await sequelize.authenticate();
        console.log('Database connection establishes successfully!');
    } catch (error) {
        console.error('Unable to connect to the databse:', error)
        process.exit(1); //Exit process with failure
    }
};

testConnection();

module.exports = sequelize;