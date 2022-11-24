import express from 'express';
import Product from '../models/productModel.js'
import data from '../data.js';

const seedsRouter = express.Router();

seedsRouter.get('/', async (req, res) => {
    await Product.delete({});
    const createdProducts = await Product.insertMany(data.products);
    res.send({ createdProducts });
});

export default seedsRouter;
