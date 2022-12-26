import express from 'express';
import Event from '../models/eventModel.js';



const eventsRouter = express.Router();
eventsRouter.get('/', async (req, res) => {
    const events = await Event.find();
    res.send(events);
});
export default eventsRouter;