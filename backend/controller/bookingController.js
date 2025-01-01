const createBooking = async (req, res) => {
    try {
        res.status(200).json({message: "Booking Created"});
    } catch (error) {
        res.status(500).json({message: "Server Error"});
    }
};

const getBooking = async (req, res) => {
    try {
        res.status(200).json({message: "Booking Found"});
    } catch (error) {
        res.status(500).json({message: "Server Error"});
    }
};

const deleteBooking = async (req, res) => {
    try {
        res.status(200).json({message: "Booking Deleted"});
    } catch (error) {
        res.status(500).json({message: "Server Error"});
    }
}

export default  {createBooking, getBooking, deleteBooking};