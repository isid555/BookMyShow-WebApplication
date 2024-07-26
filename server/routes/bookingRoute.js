const router = require("express").Router();
const authMiddleware = require("../middleware/authMiddleware");
const Booking = require("../models/bookingModal");
const Show = require("../models/showModel");





// Create a booking after the payment
router.post("/book-show", async (req, res) => {
  try {
    const newBooking = new Booking(req.body);
    await newBooking.save();

    const show = await Show.findById(req.body.show).populate("movie");
    const updatedBookedSeats = [...show.bookedSeats, ...req.body.seats];
    await Show.findByIdAndUpdate(req.body.show, {
      bookedSeats: updatedBookedSeats,
    });

    const populatedBooking = await Booking.findById(newBooking._id).populate("user")
    .populate("show")
    .populate({
      path: "show",
      populate: {
        path: "movie",
        model: "movies",
      },
    })
    .populate({
      path: "show",
      populate: {
        path: "theatre",
        model: "theatres",
      },
    });


    console.log("this is populated Booking", populatedBooking);
    // console.log(populatedBooking.user.email);

    res.send({
      success: true,
      message: "New Booking done!",
      data: populatedBooking,
    });

  } catch (err) {
    res.send({
      success: false,
      message: err.message,
    });
  }
});

router.get("/get-all-bookings", authMiddleware, async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.body.userId })
      .populate("user")
      .populate("show")
      .populate({
        path: "show",
        populate: {
          path: "movie",
          model: "movies",
        },
      })
      .populate({
        path: "show",
        populate: {
          path: "theatre",
          model: "theatres",
        },
      });

    res.send({
      success: true,
      message: "Bookings fetched!",
      data: bookings,
    });
  } catch (err) {
    res.send({
      success: false,
      message: err.message,
    });
  }
});

module.exports = router;
