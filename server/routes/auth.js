/* eslint-disable no-unused-vars */
const router = require("express").Router();
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const { verifyTokenandAdmin } = require('./verifyToken');
//MAKE SPECIFIC ERROR HANDLING FOR USERS!!


//ADMIN LOGIN POST ROUTE
router.post("/login", async (req, res) => {
  try {
    console.log('req in back end', req.body)
    const user = await User.findOne({ username: req.body.username });

    if (!user) return res.status(401).json("You entered in the wrong credentials");

    const decryptPassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.PASS_SEC
    );

    const originalPassword = decryptPassword.toString(CryptoJS.enc.Utf8);

    if (originalPassword !== req.body.password) return res.status(401).json("You entered in the wrong credentials");

    const accessToken = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_SEC,
      { expiresIn: "3d" }
    );

    res.cookie("nToken", accessToken, { maxAge: 900000, httpOnly: true });

    const { password, ...others } = user._doc;
    //use the spread operator to only res.json everything in the object EXCEPT the password. Added ._doc because the obj returned without had more key value pairs
    //using _.doc because this is where mongo stores this information

      // res.status(200).json(others)
    res.status(200).json({ ...others, accessToken });
    // return res.redirect("/admin");
  } catch (err) {
    res.status(500).json(err);
  }
});

////LOGOUT GET ROUTE
router.post("/logout", async (req, res) => {
  res.clearCookie("nToken");
  return res.status(200).json({})
});

//SIGN UP POST ROUTE
router.post("/signup", async (req, res) => {

  const newUser = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SEC
    ).toString(),
    isAdmin: req.body.isAdmin
  });
  try {
    User.findOne({ email: newUser.email }, function (user) {
      if (user) return res.status(400).json("email exits");
    });
    const accessToken = jwt.sign(
      {
        id: newUser._id,
        isAdmin: newUser.isAdmin,
      },
      process.env.JWT_SEC,
      { expiresIn: "3d" }
    );
    res.cookie("nToken", accessToken, { maxAge: 900000, httpOnly: true });

    const { password, ...others } = newUser._doc;

    const savedUser = await newUser.save();
    res.status(200).json({ ...others, accessToken })
    console.log('savedUser',savedUser)
    // res.status(201).json({savedUser, accessToken});

  } catch (err) {
    res.status(500).json(err);
    console.log(err)
  }
});

module.exports = router;

