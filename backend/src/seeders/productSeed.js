import { faker } from '@faker-js/faker';
import Product from '../../models/Product.js';

const createProducts = async () => {
  const products = [];
  const subcategories = ['Sandals', 'Pumps', 'Mules', 'Flats', 'Boots'];

  // Create 15 products per subcategory
  subcategories.forEach(subcategory => {
    for (let i = 0; i < 15; i++) {
      products.push({
        name: `${subcategory} ${faker.number.int({ min: 1000, max: 9999 })}`,
        description: `${faker.commerce.productDescription()}`,
        price: faker.commerce.price({ min: 150, max: 800, dec: 2 }),
        stock: faker.number.int({ min: 2, max: 20 }),
        imageUrl: faker.image.urlLoremFlickr({ category: 'shoes' }),
        subcategory,
        createdAt: faker.date.past(),
        updatedAt: new Date()
      });
    }
  });

  return Product.bulkCreate(products);
};

export default createProducts;