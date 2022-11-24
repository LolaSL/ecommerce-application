import express from 'express';
import Product from '../models/productModel'
const productRouter = express.Router();

productRouter.get('/', async (req, res) => {
    await Product.remove({});
    const createdProducts = await Product.i
})