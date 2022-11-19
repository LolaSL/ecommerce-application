import express from 'express';
import data from './'
const app = express = express();
app.get('/api/products', (req, res) => {
    res.send(data);
})