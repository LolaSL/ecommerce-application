import express from 'express';

const productRouter = express.Router();

productRouter.get('/', async (req, res) => { 
    const products = await Product.find(req.params.products);
    res.send(products)
})