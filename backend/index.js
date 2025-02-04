const sequelize = require('./config/db');
const { syncModels } = require('./models/associations');

// Sync all models with the database
sequelize.sync({ force: true }).then(() => {
  console.log('✅ Database tables synced!');
}).catch(err => {
  console.error('❌ Database sync failed:', err);
});