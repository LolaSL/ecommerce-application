import mongoose from "mongoose";

  
const productSchema = new mongoose.Schema(
   
    {
        name: { type: String, required: true, unique: true },
       email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        isAdmin: { type: String, required: true },
        price: { type: Number, required: true },
        countInStock: { type: Number, required: true },
        brand: { type: String, required: true },
        rating: { type: Number, required: true },
        numReviews: { type: Number, required: true },
        description: { type: String, required: true },
        reviews: [reviewSchema],
     
    },
    {
        timestamps: true
    }

);
const Product = mongoose.model('Product', productSchema);
export default Product;
