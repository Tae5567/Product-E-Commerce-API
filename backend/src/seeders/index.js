import sequelize from '../../config/db.js';
import createUsers from '../userSeed.js';
import createProducts from './productSeed.js';
import createOrders from './orderSeed.js';

const seedDatabase = async () => {
  try {
    await sequelize.sync({ force: true }); 
    console.log('🔄 Database synced');

    await createUsers();
    console.log('✅ Users seeded');

    await createProducts();
    console.log('✅ Products seeded');

    await createOrders();
    console.log('✅ Orders seeded');

    console.log('✨ Database seeding completed!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Seeding failed:', error);
    process.exit(1);
  }
};

// Run only if called directly (not when imported)
if (process.argv[1].includes('seed.js')) {
  seedDatabase();
}

export default seedDatabase;