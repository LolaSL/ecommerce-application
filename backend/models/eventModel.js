import mongoose from "mongoose";


const eventSchema = new mongoose.Schema(

    {
        slug: { type: String, required: true, unique: true },
        title: { type: String, required: true },
        type: { type: String, required: true },
        image: { type: String, required: true },
        information: { type: String, required: true },
        informationSource: { type: String },
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
const Event = mongoose.model('Event', eventSchema);
export default Event;