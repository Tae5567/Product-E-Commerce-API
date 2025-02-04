import { faker } from '@faker-js/faker';
import bcrypt from 'bcryptjs';
import User from '../models/User';

const createUsers = async () => {
  const users = [];
  const password = await bcrypt.hash('password123', 10);

  // Create Admin User
  users.push({
    username: 'admin',
    email: 'admin@example.com',
    password,
    isAdmin: true,
    createdAt: new Date(),
    updatedAt: new Date()
  });

  // Create 10 Regular Users
  for (let i = 0; i < 10; i++) {
    users.push({
      username: faker.internet.userName(),
      email: faker.internet.email(),
      password,
      createdAt: faker.date.past(),
      updatedAt: new Date()
    });
  }

  return User.bulkCreate(users);
};

export default createUsers;