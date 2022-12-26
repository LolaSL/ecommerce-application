import mongoose from "mongoose";


const eventsSchema = new mongoose.Schema(

    {
        title: { type: String, required: true, unique: true },
        type: { type: String, required: true, unique: true },
        image: { type: String, required: true },
        information: { type: String, required: true },
        informationSource: { type: String, required: true },
        reference: { type: String, required: true },
        date: { type: String, required: true },
        time: { type: String, required: true },
        location: { type: String, required: true },
        language: { type: String, required: true },
    },
    {
        timestamps: true
    }

);
const Events = mongoose.model('Events', eventsSchema);
export default Events;