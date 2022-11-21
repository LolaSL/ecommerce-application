import express from 'express';
import data from './data.js';

const app = express();

app.get('/api/products', (req, res) => {
    res.send(data.productList);
});
app.get('/api/products/slug/:slug', (req, res) => {
    const product = data.productList.find(x => x.slug ===)
    res.send(data.productList);
});
const port = process.env.PORT || 7000;
app.listen(port, () => {
    console.log(`Server is listening on port http://localhost:${port}`)
});