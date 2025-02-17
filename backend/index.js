//backend/index.js
import sequelize from './config/db.js';
import '../models/associations.js'; 

// Sync all models with the database
sequelize.sync({ force: true }).then(() => {
  console.log('✅ Database tables synced!');
}).catch(err => {
  console.error('❌ Database sync failed:', err);
});