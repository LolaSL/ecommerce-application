import express from "express";
import expressAsyncHandler from "express-async-handler";//Catch the errors in async(req, res)
import Order from '../models/orderModel.js'
import { isAuth } from '../utils.js'

const orderRouter = express.Router();

orderRouter.get(
    '/',
    isAuth,
    isAdmin,
    expressAsyncHandler(async (req, res) => {
        const orders = await Order.find().populate('user', 'name');
        res.send(orders);
    })
);


orderRouter.post('/', isAuth, expressAsyncHandler(async (req, res) => {
    const newOrder = new Order({
        orderItems: req.body.orderItems.map((x) => ({ ...x, product: x._id })),
        shippingAddress: req.body.shippingAddress,
        paymentOption: req.body.paymentOption,
        itemsPrice: req.body.itemsPrice,
        shippingPrice: req.body.shippingPrice,
        taxPrice: req.body.taxPrice,
        totalPrice: req.body.totalPrice,
        user: req.user._id,
    });

    const order = await newOrder.save();
    res.status(201).send({ message: 'New order was created', order });
})
);
orderRouter.get(
    '/:id',
    isAuth,
    expressAsyncHandler(async (req, res) => {
        const order = await Order.findById(req.params.id);
        if (order) {
            res.send(order);
        } else {
            res.status(404).send({ message: 'Order Not Found' });
        }
    })
);


export default orderRouter;