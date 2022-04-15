const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema(
  {
    // _id: mongoose.Schema.Types.ObjectId,
    name: { type: String, required: true },
    email: { type: String, required: true, unique: false},
    number: { type: String, required: true },
    comments: { type: String, required: false },
    date: {type: Date, required: true},
    time: {type: String, required: true},
    services: {type: Array, required: true},
    availability: { type: String, required: true },
    // confirmed: { type: Boolean, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Booking', BookingSchema);
