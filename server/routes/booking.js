const router = require('express').Router();
const Booking = require('../models/booking');
const nodemailer = require('nodemailer');
const ejs = require('ejs');
const { db } = require('../models/booking');

const EMAIL = process.env.EMAIL;
const NODEMAIL = process.env.NODEMAIL;

const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: NODEMAIL,
    pass: EMAIL,
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Ready to Send');
  }
});

// console.log('db info', db.bookings.find())

//USER GETS BOOKING
router.get('/find/:id', async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);
    res.status(200).json(booking);
  } catch (err) {
    res.status(500).json(err);
  }
});

//USER CREATE BOOKING
router.post('/book', async (req, res) => {
  console.log('req', req.body);
  const booking = new Booking({
    name: req.body.Name,
    email: req.body.Email,
    comments: req.body.Comments,
    number: req.body.Number,
    // servicesList: req.body.ServicesList
    date: req.body.Date,
  });
  try {
    console.log('after req', booking);
    const savedBooking = await booking.save();
    console.log('savedBooking', savedBooking);
    res.status(201).json(savedBooking);
  } catch (err) {
    res.status(500).json(err);
  }

  const name = req.body.Name;
  const email = req.body.Email;

  await ejs.renderFile(
    __dirname + '/Emails/appointmentConfirmation.ejs',
    { name: name },
    function (err, data) {
      if (err) {
        res.status(500).json(err);
      } else {
        const mail = {
          from: name,
          to: email,
          // to: NODEMAIL,
          subject: 'Leanest Nails - Appointment Confirmation',
          html: data,
        };

        contactEmail.sendMail(mail, (err) => {
          if (err) {
            res.status(500).json(err);
          } else {
            res.status(200).json('Message Sent');
          }
        });
      }
    }
  );
});

//USER CANCELS BOOKING
router.delete('/:id', async (req, res) => {
  try {
    await Booking.findByIdAndDelete(req.params.id);
    res.status(200).json('Booking has been deleted');
  } catch (err) {
    res.status(500).json(err);
  }
});

//USER UPDATES BOOKING
router.put('/:id', async (req, res) => {
  try {
    const updatedBooking = await Booking.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    updatedBooking.save();
    console.log('updatedBooking', updatedBooking);
    res.status(200).json(updatedBooking);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
