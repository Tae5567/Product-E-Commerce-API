exports.createOrder = async (req, res) => {
    const { items, total } = req.body;
    const order = await Order.create({
      userId: req.user.id,
      total,
      status: 'pending',
    });
    res.status(201).json(order);
  };