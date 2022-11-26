import express from "express";
import expressAsyncHandler from "express-async-handler";//Catch the errors in async(req, res)
import User from "../models/userModel.js";
import { generateToken } from "../utils.js";
 

const orderRouter = express.Router();
orderRouter.post('/', expressAsyncHandler(async(req, res) => {
    
})

export default orderRouter;