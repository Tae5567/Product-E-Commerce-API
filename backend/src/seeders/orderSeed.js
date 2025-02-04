import { faker } from '@faker-js/faker';
import { Order, OrderItem, Cart, User, Product } from '../models';

const createOrders = async () => {
  const users = await User.findAll();
  const products = await Product.findAll();

  // Create Carts for Users
  for (const user of users) {
    const cartItems = faker.helpers.arrayElements(products, {
      min: 0,
      max: 5
    }).map(product => ({
      userId: user.id,
      productId: product.id,
      quantity: faker.number.int({ min: 1, max: 5 })
    }));

    await Cart.bulkCreate(cartItems);
  }

  // Create Orders
  const orders = [];
  for (let i = 0; i < 20; i++) {
    const user = faker.helpers.arrayElement(users);
    const order = await Order.create({
      userId: user.id,
      total: 0, // Will update after items
      status: faker.helpers.arrayElement(['pending', 'completed', 'cancelled']),
      paymentId: faker.string.uuid(),
      createdAt: faker.date.recent(),
      updatedAt: new Date()
    });

    // Create Order Items
    const orderProducts = faker.helpers.arrayElements(products, {
      min: 1,
      max: 5
    });
    
    let total = 0;
    for (const product of orderProducts) {
      const quantity = faker.number.int({ min: 1, max: 3 });
      await OrderItem.create({
        orderId: order.id,
        productId: product.id,
        quantity,
        priceAtPurchase: product.price
      });
      total += product.price * quantity;
    }

    // Update Order Total
    await order.update({ total });
  }
};

export default createOrders;