import express from 'express';
import Event from '../models/eventModel.js';



const eventsRouter = express.Router();
eventsRouter.get('/', async (req, res) => {
    const events = await Event.find();
    res.send(events);
});

eventsRouter.post(
    '/',
    isAuth,
    isAdmin,
    expressAsyncHandler(async (req, res) => {
        const newEvent = new Event({

            slug: 'sample-name-' + Date.now(),
            title: 'sample name ' + Date.now(),
            type: 'sample type',
            image: '/images/p1.jpg',
            information: 'sample information',
            imformationSource: 'sample information source',
            reference: 'sample reference',
            date: 'sample date',
            time: 'sample time',
            location: 0,
            numReviews: 0,
            description: 'sample description',
        });
        const event = await newEvent.save();
        res.send({ message: 'Event Created', event});
    })
);
export default eventsRouter;