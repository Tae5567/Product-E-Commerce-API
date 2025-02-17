import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD, 
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'postgres'
})
;


//Test database connection
const testConnection = async () => {
    try{
        await sequelize.authenticate();
        console.log('Database connection established successfully!');
    } catch (error) {
        console.error('Unable to connect to the databse:', error)
        process.exit(1); //Exit process with failure
    }
};

testConnection();

export default sequelize;