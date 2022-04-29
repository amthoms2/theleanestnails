/* eslint-disable no-unused-vars */
const router = require('express').Router();
const { verifyTokenandAuth, verifyTokenandAdmin } = require('./verifyToken');
const User = require('../models/user');

//UPDATE
router.put('/:id', verifyTokenandAuth, async (req, res) => {
  if (req.body.password) {
    req.body.password = CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SEC
    ).toString();
  }
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );

    const { password, ...others} = updatedUser._doc
    res.status(200).json({...others});
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE A USER
router.delete('/:id', verifyTokenandAuth, async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json('User has been deleted');
  } catch (err) {
    res.status(500).json(err);
  }
});

//ADMIN GET 1 USER
// router.get("/find/:id", verifyTokenandAdmin, async (req, res) => {
//   try{
//     const user = await User.findById(req.params.id)
//     const { password, ...others } = user._doc;
//     //use the spread operator to only res.json everything in the object EXCEPT the password. Added ._doc because the obj returned without had more key value pairs

//       res.status(200).json(others)
//   }catch(err){
//     res.status(500).json(err)
//   }
// });

//ADMIN GET ALL USERS
// router.get("/", verifyTokenandAdmin, async (req, res) => {
//   const query = req.query.new
//   try{
//     const users = query ? await User.find().sort({ _id:-1 }).limit(5) : await User.find();
//     //if querying (new) it will return 5 most recent users; ^ will sort it in order?
//     res.status(200).json(users)
//   }catch(err){
//     res.status(500).json(err)
//   }
// })

//GET USER STATISTICS

// router.get("/stats", verifyTokenandAdmin, async (req, res) => {
//   const date = new Date();
//   const prevYear = new Date(date.setFullYear(date.getFullYear() - 1));

//   try{
//     const data = await User.aggregate([
//       {$match: {createdAt: { $gte: prevYear } } },
//       {
//         $project: {
//           month: { $month: "$createdAt"}
//         },
//       },
//       {
//         $group: {
//           _id: "$month",
//           total: { $sum: 1 },
//           //id is representation of the current month; oct = 10
//         }
//       }
//     ]);
//     res.status(200).json(data)
//   }catch(err){
//     res.status(500).json(err)
//   }
// })

module.exports = router;
