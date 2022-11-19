import express from 'express';
import data from './data';

const app = express = express();

app.get('/api/products', (req, res) => {
    res.send(data.productList);
});
const port = process.env.PORT || 7000;
app.listen(port, () => {
    console.log('Server is listening on port http://localhost:$7050')
});