import express from 'express';
import Product from '../models/productModel.js';

const productRouter = express.Router();

productRouter.get('/', async (req, res) => {
    const products = await Product.find();
    res.send(products);
});
productRouter.get('/api/products', (req, res) => {
    res.send(data.productList);
});

app.get('/api/products/slug/:slug', (req, res) => {
    const product = data.productList.find((x) => x.slug === req.params.slug);
    if (product) {
        res.send(product)
    } else {
        res.status(404).send({ message: "Product not found..." })
    }

});

app.get('/api/products/:id', (req, res) => {
    const product = data.productList.find((x) => x._id === req.params.id);
    if (product) {
        res.send(product)
    } else {
        res.status(404).send({ message: "Product not found..." })
    }

});