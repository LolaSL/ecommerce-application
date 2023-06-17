import express from 'express';
import Event from '../models/eventModel.js';



const eventsRouter = express.Router();
eventsRouter.get('/', async (req, res) => {
    const products = await Event.find();
    res.send(products);
});
export default eventsRouter;