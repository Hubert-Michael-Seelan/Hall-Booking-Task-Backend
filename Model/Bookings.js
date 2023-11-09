const mongoose = require("mongoose");

const booking = new mongoose.Schema({
  name: String,
  description: String,
  email:String,
});

const Booking = mongoose.model("Booking", booking);

module.exports = Booking;
