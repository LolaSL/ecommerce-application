import express from 'express';
import Product from '../models/productModel.js'
import data from '../data.js';
import User from '../models/userModel.js';
import Event from '../models/eventModel.js';


const seedsRouter = express.Router();

seedsRouter.get('/', async (req, res) => {
    await Product.deleteMany({});
    const createdProductList = await Product.insertMany(data.productList);
    await User.deleteMany({});
    const createdUserList = await User.insertMany(data.userList);
    awaitEvents.deleteMany({});
    const createdEventsList = await Event.insertMany(data.productList);
    res.send({ createdProductList, createdUserList});
});



export default seedsRouter;
