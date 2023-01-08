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
            location: 'sample location',
            language: 'sample language',

        });
        const event = await newEvent.save();
        res.send({ message: 'Event Created', event });
    })
);

const PAGE_SIZE = 4;
eventsRouter.get(
    '/admin',
    isAuth,
    isAdmin,
    expressAsyncHandler(async (req, res) => {
        const { query } = req;
        const page = query.page || 1;
        const pageSize = query.pageSize || PAGE_SIZE;

        const events = await Event.find()
            .skip(pageSize * (page - 1))
            .limit(pageSize);
        const countEvents = await Events.countDocuments();
        res.send({
            products,
            countProducts,
            page,
            pages: Math.ceil(countProducts / pageSize),
        });
    })
);
export default eventsRouter;