import express from "express";
import bcrypt from "bcryptjs";
import expressAsyncHandler from "express-async-handler";//Catch the errors in async(req, res)
import User from "../models/userModel.js";
import { generateToken } from "../utils.js";
 

const order