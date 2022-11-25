import express from 'express';
import data from './data.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import seedsRouter from './routes/seedsRouter.js';
import productRouter from './routes/productRoutes.js';
import userRouter from './routes/userRoutes.js';

dotenv.config();
mongoose
    .connect(process.env.MONGODB_URI).then(() => { console.log('Connected to Mongo DB') })
    .catch((error) => console.log(error.message))

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/seeds', seedsRouter);
app.use('/api/products', productRouter);
app.use('/api/users', userRouter);
app.

const port = process.env.PORT || 7000;
app.listen(port, () => {
    console.log(`Server is listening on port http://localhost:${port}`)
});