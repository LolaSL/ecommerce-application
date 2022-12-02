import express from 'express';
import Product from '../models/productModel.js'
import data from '../data.js';
import User from '../models/userModel.js';
import Order from '../models/orderModel.js';

const seedsRouter = express.Router();

seedsRouter.get('/', async (req, res) => {
    await Product.deleteMany({});
    const createdProductList = await Product.insertMany(data.productList);
    await User.deleteMany({});
    const createdUserList = await User.insertMany(data.userList);
    await Order.deleteMany({});
    const createdOrderList = await Order.insertMany(data.orderList);
    res.send({ createdProductList, createdUserList});
});



export default seedsRouter;