import express from 'express';
import Product from '../models/productModel.js';

const productRouter = express.Router();

productRouter.get('/', async (req, res) => {
    const products = await Product.find();
    res.send(products);
});

productRouter.get('/api/products/slug/:slug', async(req, res) => {
    const product = Product.findOne((x) => x.slug === req.params.slug);
    if (product) {
        res.send(product)
    } else {
        res.status(404).send({ message: "Product not found..." })
    }

});

productRouter.get('/api/products/:id', (req, res) => {
    const product = Product.findById(req.params.id);
    if (product) {
        res.send(product)
    } else {
        res.status(404).send({ message: "Product not found..." })
    }

});