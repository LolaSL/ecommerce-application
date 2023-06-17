import mongoose from "mongoose";

  
const eventsSchema = new mongoose.Schema(
   
    {
        title: { type: String, required: true, unique: true },
       type: { type: String, required: true, unique: true },
        image: { type: String, required: true },
        information: { type: String, required: true },


       : { type: String, required: true },
        reviews: [reviewSchema],
     
    },
    {
        timestamps: true
    }

);
const Events = mongoose.model('Events', eventsSchema);
export default Events;