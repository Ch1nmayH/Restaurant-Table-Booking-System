import express from 'express';
import bookingController from '../controller/bookingController.js';
const router = express.Router();

router.get('/', (req, res) => {
    res.send("Booking Api is running");
});

router.get(`/getBooking?/:id?`, bookingController.getBooking);
router.post(`/createBooking`, bookingController.createBooking);
router.delete(`/deleteBooking?/:id`, bookingController.deleteBooking);

//check if the booking is available
router.get(`/available-slots`, bookingController.checkBooking);


export default router;
