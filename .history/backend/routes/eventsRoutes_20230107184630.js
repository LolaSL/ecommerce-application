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

eventsRouter.put(
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
            event.category = req.body.category;
            product.brand = req.body.brand;
            product.countInStock = req.body.countInStock;
            product.description = req.body.description;
            await   event.save();
            res.send({ message: 'Event Updated' });
        } else {
            res.status(404).send({ message: 'Event Not Found' });
        }
    })
);
productRouter.delete(
    '/:id',
    isAuth,
    isAdmin,
    expressAsyncHandler(async (req, res) => {
        const event = await Event.findById(req.params.id);
        if (event) {
            await product.remove();
            res.send({ message: 'Event Deleted' });
        } else {
            res.status(404).send({ message: 'Event Not Found' });
        }
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
        const countEvents = await Event.countDocuments();
        res.send({
            events,
            countEvents,
            page,
            pages: Math.ceil(countEvents / pageSize),
        });
    })
);

eventsRouter.get('/:id', async (req, res) => {
    const event = await Event.findById(req.params.id);
    if (event) {
        res.send(event)
    } else {
        res.status(404).send({ message: "Event not found..." })
    }

});
export default eventsRouter;