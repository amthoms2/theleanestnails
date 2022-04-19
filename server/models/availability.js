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

let today = new Date();
AvailabilitySchema.index({createdAt: 1},{partialFilterExpression: { date: { $lte: { today } } }});

// AvailabilitySchema.index({date: 1},{expireAfterSeconds: 89400});

// db.availabilities.deleteMany({ date : {"$lt" : lastWeek } })

module.exports = mongoose.model('Availability', AvailabilitySchema);
