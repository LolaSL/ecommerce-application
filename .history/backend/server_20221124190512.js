import express from 'express';
import data from './data';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import seedsRouter from './routes/seedsRouter.js';


dotenv.config();
mongoose
    .connect(process.env.MONGODB_URI).then(() => { console.log('Connected to Mongo DB') })
    .catch((error) => console.log(error.message))

const app = express();

app.use('/api/seeds', seedsRouter);

app.get('/api/products', (req, res) => {
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
const port = process.env.PORT || 7000;
app.listen(port, () => {
    console.log(`Server is listening on port http://localhost:${port}`)
});