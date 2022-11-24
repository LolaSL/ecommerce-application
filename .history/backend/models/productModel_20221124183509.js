import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
    {
        name: { type: String, required: true, unique: true },
       slug: { type: String, required: true, unique: true },
        image: { type: String, required: true },
        brand: { type: String, required: true },
        description: { type: String, required: true },
        price: { type: Number, required: true },
        countInStock: { type: Number, required: true },
        rating: { type: N, required: true },
       numReviews: { type: String, required: true}

    }

);