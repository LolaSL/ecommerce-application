import express from 'express';
import Product from '../models/productModel.js';



const EventsRouter = express.Router();
productRouter.get('/', async (req, res) => {
    const products = await Product.find();
    res.send(products);
});
export default productRouter;