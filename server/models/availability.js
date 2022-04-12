const mongoose = require('mongoose');
// const bookingSchema = require('./booking').schema;

const AvailabilitySchema = new mongoose.Schema(
  {
    date: { type: String, required: true },
    isAvailable: { type: Boolean, default: true }
    // confirmed: { type: Boolean, default: false },
    // bookings: [bookingSchema]
  }
);

module.exports = mongoose.model('Availability', AvailabilitySchema);
