import express from 'express';
import Product from '../models/productModel.js';
import expressAsyncHandler from 'express-async-handler';


const productRouter = express.Router();
productRouter.get('/', async (req, res) => {
    const products = await Product.find();
    res.send(products);
});
export default productRouter;