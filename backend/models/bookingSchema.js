import mongoose from "mongoose";

const bookingSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    postalCode: {
        type: String,
        required: true,
    },
    numberOfGuests: {
        type: Number,
        required: true,
    },
    DateForBooking: {
        type: Date,
        required: true,
    },
    timeForBooking: {
        type: String,
        required: true,
    },
    bookedAt: {
        type: Date,
        required: true,
    },
})

const Booking = mongoose.model("Booking", bookingSchema);

export default Booking;

