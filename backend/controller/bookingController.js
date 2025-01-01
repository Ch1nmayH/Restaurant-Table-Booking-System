import Booking from "../models/bookingSchema.js";

const createBooking = async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      address,
      city,
      postalCode,
      numberOfGuests,
      DateForBooking,
      timeForBooking,
    } = req.body;

    //TO DO
    //Code to check if the booking already exists for the available slot

    //Creating the booking
    const booking = await Booking.create({
      name,
      email,
      phone,
      address,
      city,
      postalCode,
      numberOfGuests,
      DateForBooking,
      timeForBooking,
      bookedAt: Date.now(),
    });

    res.status(200).json({ message: "Booking Created", booking });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

const getBooking = async (req, res) => {
  try {
    //Code to get all the bookings and booking by id
    const id = req.params.id;
    if (id) {
      const booking = await Booking.findById(id);
      if (!booking) {
        return res.status(201).json({ message: "Booking Not Found" });
      }
      return res.status(200).json({ message: "Booking Found", booking });
    }
    const bookings = await Booking.find();
    if (!bookings) {
      return res.status(404).json({ message: "No Bookings Found" });
    }
    res.status(200).json({ message: "Booking Found", bookings });
  } catch (error) {
    return res.status(500).json({ message: "Server Error" });
  }
};

const deleteBooking = async (req, res) => {
  try {
    const id = req.params.id;

    if (!id) {
      return res.status(400).json({ message: "Booking Id Required" });
    }

    const booking = await Booking.findByIdAndDelete(id);

    if (!booking) {
      return res.status(404).json({ message: "Booking Not Found" });
    }

    res.status(200).json({ message: "Booking Deleted" });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

export default { createBooking, getBooking, deleteBooking };
