import express from 'express';
import bookingController from '../controller/bookingController.js';
const router = express.Router();

router.get('/', (req, res) => {
    res.send("Booking Api is running");
});

router.post(`/create`, bookingController.createBooking);


export default router;
