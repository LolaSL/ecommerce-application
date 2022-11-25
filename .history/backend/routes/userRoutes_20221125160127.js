import express from "express";
import bcrypt from "bcryptjs";
import expressAsyncHandler from "express-async-handler";//Catch errors from 
import User from "../models/userModel.js";

const userRouter = express.Router();

userRouter.get('/', expressAsyncHandler(async (req, res) => {
    const users = await User.find({});
    res.send(users);
    
}));

userRouter.post('/', expressAsyncHandler(async (req, res) => {
    const users = await User.find({});
    res.send(users);
    
}));