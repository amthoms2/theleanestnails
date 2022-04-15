const mongoose = require('mongoose');
// const bookingSchema = require('./booking').schema;

const AvailabilitySchema = new mongoose.Schema(
  {
    date: { type: Date, required: true },
    isAvailable: { type: Boolean, default: true },
    // confirmed: { type: Boolean, default: false },
    // bookings: [bookingSchema]
  },
  { timestamps: true }
);

// AvailabilitySchema.index({date: 1},{expireAfterSeconds: 5});

module.exports = mongoose.model('Availability', AvailabilitySchema);
