import express from 'express';
import Event from '../models/eventModel.js';
import { isAuth, isAdmin } from '../utils.js';
import expressAsyncHandler from 'express-async-handler';

const eventRouter = express.Router();

eventRouter.get('/', async (req, res) => {
    const events = await Event.find();
    res.send(events);
});

eventRouter.post(
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

eventRouter.put(
    '/:id',
    isAuth,
    isAdmin,
    expressAsyncHandler(async (req, res) => {
        const eventId = req.params.id;
        const event = await Event.findById(eventId);
        if (event) {
            event.slug = req.body.slug;
            event.title = req.body.title;
            event.type = req.body.type;
            event.image = req.body.image;
            event.informationSource = req.body.informationSource;
            event.reference = req.body.reference;
            event.date = req.body.date;
            event.time = req.body.time;
            event.location = req.body.location;
            event.language = req.body.language;
            event.information = req.body.information;
            await event.save();
            res.send({ message: 'Event Updated' });
        } else {
            res.status(404).send({ message: 'Event Not Found' });
        }
    })
);
eventRouter.delete(
    '/:id',
    isAuth,
    isAdmin,
    expressAsyncHandler(async (req, res) => {
        const event = await Event.findById(req.params.id);
        if (event) {
            await event.remove();
            res.send({ message: 'Event Deleted' });
        } else {
            res.status(404).send({ message: 'Event Not Found' });
        }
    })
);
const PAGE_SIZE = 4;

eventRouter.get(
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
        const countEvents = await Event.countDocuments();
        res.send({
            events,
            countEvents,
            page,
            pages: Math.ceil(countEvents / pageSize),
        });
    })
);

// eventsRouter.get('/slug/:slug', async (req, res) => {
//     const event = await Event.findOne({ slug: req.params.slug });
//     if (event) {
//         res.send(event)
//     } else {
//         res.status(404).send({ message: "Event not found..." })
//     }

// });

eventsRouter.get('/:id', async (req, res) => {
    const event = await Event.findById(req.params.id);
    if (event) {
        res.send(event)
    } else {
        res.status(404).send({ message: "Event not found..." })
    }

});
export default eventRouter;