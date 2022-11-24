import express from 'express';
import Product from '../models/productModel.js'
import data from '../data.js';

const seedsRouter = express.Router();

seedsRouter.get('/', async (req, res) => {
    await Product.deleteMany({});
    const createdProductList = await Product.insertMany(data.productList);
    res.send({ createdProductList });
});

seedsRouter.get('/', async (req, res) => {
    await Product.deleteMany({});
    const createdProductList = await Product.insertMany(data.productList);
    res.send({ createdProductList });
});
export default seedsRouter;
