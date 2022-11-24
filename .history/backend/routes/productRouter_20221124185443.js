import express from 'express';
import Product from '../models/productModel.js'
const seedsRouter = express.Router();

seedsRouter.get('/', async (req, res) => {
    await Product.remove({});
    const createdProducts = await Product.insertMany(data.products);
    res.send({ createdProducts });
});

export default seedsRouter
Router;