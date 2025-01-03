import Booking from "../models/bookingSchema.js";

const createBooking = async (req, res) => {
  try {
    const availableTimeSlots = [
      "14:00",
      "14:30",
      "15:00",
      "15:30",
      "16:00",
      "16:30",
      "17:00",
      "17:30",
      "18:00",
      "18:30",
      "19:00",
      "19:30",
    ];

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

    if(DateForBooking < Date.now()){
      return res.status(400).json({ message: "Invalid Date" });
    }

    if(availableTimeSlots.includes(timeForBooking)){
      const existingBookings = await Booking.find({
        DateForBooking,
        timeForBooking,
      });

      if (existingBookings.length > 0) {
        return res.status(400).json({ message: "Time Slot Not Available" });
      }
    }

    else{
      return res.status(400).json({ message: "Invalid Time Slot" });
    }
    


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

const checkBooking = async (req, res) => {
  const availableTimeSlots = [
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
    "17:00",
    "17:30",
    "18:00",
    "18:30",
    "19:00",
    "19:30",
  ];

  let newTimeSlots = [];

  let { date } = req.query;

  try {
    // Parse the selected date to ignore time part
    let selectedDate = new Date(date);
    selectedDate.setHours(10, 0, 0, 0);

    // Find bookings for the selected date
    const existingBookings = await Booking.find({
      DateForBooking: {
        $gte: selectedDate, // Find bookings on the selected date
        $lt: new Date(selectedDate.getTime() + 24 * 60 * 60 * 1000), // Next day's start time
      },
    });

    availableTimeSlots.map((slot) => {
      const isBooked = existingBookings.some((booking) => {
        return booking.timeForBooking === slot;
      });
      if (!isBooked) {
        newTimeSlots.push(slot);
      }
    });

    return res.status(200).json({ availableSlots: newTimeSlots });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export default { createBooking, getBooking, deleteBooking, checkBooking };
