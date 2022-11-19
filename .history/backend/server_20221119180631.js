import express from 'express';
import data from './data';

const app = express = express();

app.get('/api/products', (req, res) => {
    res.send(data.productList);
});
const port = process.env.PORT || 3000;