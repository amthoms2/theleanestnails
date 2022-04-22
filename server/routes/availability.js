const router = require('express').Router();
const Availability = require('../models/availability');

//GET AVAILABLE SLOTS
router.get('/', async (req, res) => {
  try {
    const available = await Availability.find({isAvailable: true});
    res.status(200).json(available);
    console.log(('available', available))
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL SLOTS
router.get('/all', async (req, res) => {
  try {
    const all = await Availability.find();
    res.status(200).json(all);
    console.log(('available', all))
  } catch (err) {
    res.status(500).json(err);
  }
});

//CREATE NEW APPOINTMENT
router.post('/newdate', async (req, res) => {
  console.log('req', req.body);
  const date = new Availability({
    date: req.body.date,
  });
  try {
    console.log('after req', date);
    const savedDate = await date.save();
    res.status(201).json(savedDate);

  } catch (err) {
    res.status(500).json(err);
  }
});

//CHANGE ISAVAILABLE TO FALSE
router.put('/:id', async (req, res) => {
  try {
    const updatedSlot = await Availability.findByIdAndUpdate(
      req.params.id,
      {
        $set: {"isAvailable":false}
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

//CHANGE ISAVAILABLE TO TRUE
router.put('/true/:id', async (req, res) => {
  try {
    const updatedSlot = await Availability.findByIdAndUpdate(
      req.params.id,
      {
        $set: {"isAvailable":true}
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

//ADMIN DELETES SLOT
router.delete('/:id', async (req, res) => {
  try {
    await Availability.findByIdAndDelete(req.params.id);
    res.status(200).json('Slot has been deleted');
  } catch (err) {
    res.status(500).json(err);
  }
});

// router.post("/", function(req, res, next) {
//   console.log("request attempted");

//   console.log(req.body);
//   const dateTime = new Date(req.body.date);

//   Day.find({ date: dateTime }, (err, docs) => {
//     if (!err) {
//       if (docs.length > 0) {
//         // Record already exists
//         console.log("Record exists. Sent docs.");
//         res.status(200).send(docs[0]);
//       } else {
//         // Searched date does not exist and we need to create it
//         const allTables = require("../data/allTables");
//         const day = new Day({
//           date: dateTime,
//           tables: allTables
//         });
//         day.save(err => {
//           if (err) {
//             res.status(400).send("Error saving new date");
//           } else {
//             // Saved date and need to return all tables (because all are now available)
//             console.log("Created new datetime. Here are the default docs");
//             Day.find({ date: dateTime }, (err, docs) => {
//               err ? res.sendStatus(400) : res.status(200).send(docs[0]);
//             });
//           }
//         });
//       }
//     } else {
//       res.status(400).send("Could not search for date");
//     }
//   });
// });

module.exports = router;
