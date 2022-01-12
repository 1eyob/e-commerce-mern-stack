const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require('bcrypt')
const CryptoJs = require("crypto-js");
const jwt =require("jsonwebtoken");
//register
router.post("/register", async (req, res) => {
const {username,email,password}= req.body;
  encryptedPassword = await bcrypt.hash(password, 10)
  const newUser = new User({
    username,
    email,
    password: encryptedPassword ,
  });
  try {
    const savedUser = await newUser.save();
    res.status(200).json(savedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

//login
router.post("/login", async (req,res)=>{

  if (!(req.body.username && req.body.password)) {
    res.status(400).send("All input is required");
  }
    const user = await User.findOne({username:req.body.username});
    !user && res.status(401).json("wrong credentials");

    if (user && (await bcrypt.compare(req.body.password, user.password))){
        const accessToken= jwt.sign({
          id:user._id, isAdmin: user.isAdmin
        }, process.env.JWT_SEC,
        {expiresIn :"3d"}
        )
      res.status(200).json({user,accessToken});

    }
 else
   res.status(200).json("wrong credentials");

 


})

module.exports = router;
