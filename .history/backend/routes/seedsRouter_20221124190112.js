import express from 'express';
import Product from '../models/productModel.js'

import data from '../data';
const seedsRouter = express.Router();
seedsRouter.get('/', async (req, res) => {
    await Product.remove({});
    const createdProducts = await Product.insertMany(data.products);
    res.send({ createdProducts });
});

export default seedsRouter;