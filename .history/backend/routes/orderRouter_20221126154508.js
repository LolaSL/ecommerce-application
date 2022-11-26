import express from "express";
import expressAsyncHandler from "express-async-handler";//Catch the errors in async(req, res)
import Order 
import { isAuth } from "../utils.js";


const orderRouter = express.Router();
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

export default orderRouter;