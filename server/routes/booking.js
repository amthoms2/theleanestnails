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

//ADMIN GETS ALL BOOKINGS
router.get('/', async (req, res) => {
  try {
    const allBookings = await Booking.find();
    res.status(200).json(allBookings);
  } catch (err) {
    res.status(500).json(err);
  }
});


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
    date: req.body.Date,
    time: req.body.Time,
    services: req.body.ServicesList,
    availability: req.body.AvailableId,
  });
  try {
    console.log('after req', booking);
    const savedBooking = await booking.save();
    res.status(201).json(savedBooking);

  } catch (err) {
    res.status(500).json(err);
  }

  const name = req.body.Name;
  const email = req.body.Email

  await ejs.renderFile(
    __dirname + '/Emails/appointmentEmail.ejs',
    { name: name, h1: 'Thank you!', message:'Your appointment has been confirmed!', website: "https://theleanestnails.herokuapp.com/cancel", websiteDescription: 'Cancel Reservation', img: "https://images.pexels.com/photos/7564279/pexels-photo-7564279.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=400"},
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
  const booking = await Booking.findById(req.params.id);
  const email = booking.email;
  try {
    await Booking.findByIdAndDelete(req.params.id);
    res.status(200).json('Booking has been deleted');
  } catch (err) {
    res.status(500).json(err);
  }

  const name = ''

  await ejs.renderFile(
    __dirname + '/Emails/appointmentEmail.ejs',
    { name: name, h1: 'Sorry to see you go!', message:'Your appointment has been cancelled. Please proceed to shop my press-on collection.', website: "https://theleanestnails.herokuapp.com/", websiteDescription: 'Proceed to site',
    img: "https://images.pexels.com/photos/7563663/pexels-photo-7563663.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=400"},
    function (err, data) {
      if (err) {
        res.status(500).json(err);
      } else {
        const mail = {
          from: name,
          to: email,
          // to: NODEMAIL,
          subject: 'Leanest Nails - Appointment Cancellation',
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

//ADMINN UPDATES USER BOOKING DATE AND TIME
router.put('/update/:id', async (req, res) => {
  console.log(req.params.id)
  try {
    const updatedSlot = await Booking.findByIdAndUpdate(
      req.params.id,
      {
        $set:
        {"date":req.body.date, "time":req.body.time}
      },
      { new: true }
    );
    updatedSlot.save();
    console.log('updatedSlot', updatedSlot);
    res.status(200).json(updatedSlot);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
