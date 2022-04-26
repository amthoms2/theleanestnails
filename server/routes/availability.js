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

//CREATE NEW SLOT
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

//UPDATE DATE/TIME SLOT
router.put('/:id', async (req, res) => {
  try {
    console.log(req.params.id)
    const updateSlot = await Availability.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body
      },
      { new: true }
    );
    updateSlot.save();
    console.log('updateSlot', updateSlot);
    res.status(200).json(updateSlot);
  } catch (err) {
    res.status(500).json(err);
  }
});

//CHANGE ISAVAILABLE TO FALSE
router.put('/false/:id', async (req, res) => {
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

module.exports = router;
