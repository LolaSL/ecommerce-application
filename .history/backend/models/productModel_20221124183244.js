import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
    {
        name: { type: String, required: true, unique: true },
       slug: { type: String, required: true, unique: true },
        name: { type: String, required: true, unique: true },

    }

);