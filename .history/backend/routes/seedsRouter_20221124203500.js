import express from 'express';
import Product from '../models/productModel.js'
import data from '../data.js';
import User from '../models/userModel.js';

const seedsRouter = express.Router();

seedsRouter.get('/', async (req, res) => {
    await Product.deleteMany({});
    const createdProductList = await Product.insertMany(data.productList);  await User.deleteMany({});
    res.send({ createdProductList });
});


  
    const createdUserList = await User.insertMany(data.userList);
    res.send({ createdUserList });
});
export default seedsRouter;
