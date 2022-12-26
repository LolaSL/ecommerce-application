import mongoose from "mongoose";

  
const eventsSchema = new mongoose.Schema(
   
    {
        title: { type: String, required: true, unique: true },
       type: { type: String, required: true, unique: true },
        category: { type: String, required: true },
        image: { type: String, required: true },
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
const Events = mongoose.model('Events', eventsSchema);
export default Events;